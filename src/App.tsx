import React, { useState, useContext, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';

// styling
import './App.css';

// assets
import SentryLogo from './assets/branding/sentry.png';

// pages
import Home from './pages/home';
import Trade from './pages/trade';
import Explore from './pages/explore';

// context
import {UserContext} from './utils/context/context';
import {contextfields} from './utils/context/contextfields';

// utils
import {cen_node} from './utils/nodes/cen';

function App() {
  const [User, setUser] = useState<contextfields>({name: null, email: null, address: null, contacts: null, status: false });
  const context = useContext(UserContext);
  const providerValue = useMemo(() => ({ User, setUser }), [User, setUser]);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="wrapper">
          <UserContext.Provider value={providerValue}>
            <header className="app-header">
              <div className="app-header-wrapper">
                <div className="app-header-left">
		  <a href="/" className="app-header-logo-wrapper">
                    <img className="app-header-logo" src={SentryLogo} alt="Sentry Logo" /> 
		  </a> 
		</div> 
		<div className="app-header-middle">
		  <a className="app-header-nav-button" href="/">
                    Home
		  </a> 
		  <a className="app-header-nav-button" href="/trade">
                    Trade
		  </a>
		  <a className="app-header-nav-button"  href="/explore">
                    Explore
		  </a>
		</div>
		<div className="app-header-left">
		  <button className="app-header-button">Connect</button>
		</div>
	      </div>
	    </header>
	    <div className="app-page-container">
              <div className="app-content">
                <Routes>
	          <Route path="/" element={<Home />} />
		  <Route path="/trade" element={<Trade />} />
		  <Route path="/explore" element={<Explore />} />
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
