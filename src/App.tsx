import React, { useState, useContext, useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

// styling
import './App.css';

// assets
import SentryLogo from './assets/branding/sentry.png';

// websocket
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
// pages
import Home from './pages/home';
import Trade from './pages/trade';
import Explore from './pages/explore';
import Markets from './pages/markets';
import Market from './pages/market';

// context
import {UserContext} from './utils/context/context';
import {contextfields} from './utils/context/contextfields';

// utils
import {cen_node} from './utils/nodes/cen';

// wallet 
import {connectWallet, disconnectWallet, getActiveAccount, checkIfWalletConnected, getAddress} from
'./utils/wallet/wallet';

function App() {
  const [User, setUser] = useState<contextfields>({name: null, email: null, address: null, contacts: null, status: false });
  const context = useContext(UserContext);
  const providerValue = useMemo(() => ({ User, setUser }), [User, setUser]);
  const [active, setActive] = useState<boolean>(false);
  const [block, setBlock] = useState<number>(0);

  const handleBlock = (msg:any) => {
    if (msg.type === 1) {
      console.log(`block: ${msg.data[0].level}`)
      setBlock(msg.data[0].level);
    } else if (msg.type === 6) {
      console.log(`block syncing: ${msg.state}`)
      setBlock(msg.state);
    }
  }

  const getBlock = async () => {
     try {
       const connection = new HubConnectionBuilder()
         .withUrl("https://api.tzkt.io/v1/events")
         .configureLogging(LogLevel.Information)
         .build();      

      connection.on("blocks", (msg:any) => { handleBlock(msg) })
      await connection.start();
      await connection.invoke("SubscribeToBlocks");
     } catch {
       console.log("block failed to sync");
     }
  }

  const WalletConnect = async () => {
    const activeAccount = await getActiveAccount();
    let myAddress: String | undefined;
    if (!activeAccount) {
      const getAddress = await connectWallet();
      console.log('New connection: ', getAddress);
      setActive(true);
   }
  }
  const WalletDisconnect = async () => {
    const disconnectFromCen = await disconnectWallet();
    console.log('Wallet disconnected');
    setActive(false);
  }

  useEffect(() => {
    const WalletCheck = async () => {
      const WalletActive = await getActiveAccount();
      if (WalletActive) {
        setActive(true);
      }
    }
    WalletCheck();
    getBlock();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <UserContext.Provider value={providerValue}>
            <header className="app-header">
              <div className="app-header-wrapper">
                <div className="app-header-left">
		  <Link to={"/"} className="app-header-logo-wrapper">
                    <img className="app-header-logo" src={SentryLogo} alt="Sentry Logo" /> 
		  </Link> 
		</div> 
		<div className="app-header-middle">
		  <Link className="app-header-nav-button" to={"/"}>
                    Home
		  </Link> 
		  <Link className="app-header-nav-button" to={"/trade"}>
                    Trade
		  </Link>
		  <Link className="app-header-nav-button"  to={"/explore"}>
                    Explore
		  </Link>
                  <Link className="app-header-nav-button"  to={"/market"}>
                    Markets
		  </Link>
		</div>
		<div className="app-header-left">
		  {active === false && (
		    <button className="app-header-button" onClick={WalletConnect}>Connect</button>
		  )}
                  {active == true && (
                    <button className="app-header-button" onClick={WalletDisconnect}>Disconnect</button>
		  )}
		</div>
	      </div>
	    </header>
	    <div className="app-page-container">
              <div className="app-content">
                <Routes>
	          <Route path="/" element={<Home activeWallet={active} />} />
		  <Route path="/trade" element={<Trade blockNumber={block} />} />
		  <Route path="/trade/:id" element={<Trade blockNumber={block} />} />
		  <Route path="/explore" element={<Explore />} />
		  <Route path="/market" element={<Markets />} />
		  <Route path="/market/:id" element={<Market />} />
	        </Routes>
	      </div>
	    </div>
	  </UserContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
