import React, {useEffect, useState} from 'react';
import axios from 'axios';

// styling
import './portfolio.css';

import { connectWallet, getActiveAccount, getAddress } from '../../../utils/wallet/wallet';
// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import { balance, balanceGraph} from '../../../utils/user/balance';

export default function Balance() {
  const [balanceXTZ, setBalanceXTZ] = useState<number | undefined>(0);
  const [balanceGraphData, setBalanceGraphData] = useState<Array<number>>([1,1,1,1,1,1,1,1,1]);
  const [balanceCurrency, setBalanceCurrency] = useState<number>(0);

  useEffect(() => {
    const getBalance = async () => {
      const activeAccount = await getActiveAccount();
      let myAddress: String | undefined;
      let balanceGraphArray: Array<number> = [];
      if (activeAccount) {
        const address = await getAddress();	
        const balanceRequest = await balance(address)
	.then((result:any) => {
          setBalanceXTZ(result / 1000000);
	})
	.catch(() => {
           console.log("failed to get balance");
	})
	const balanceGraphRequest = await balanceGraph(address)
	  .then((result:any) => {
	    result.map((balance:any) => {
              balanceGraphArray.push(balance.balance / 1000000); 
	    })
            setBalanceGraphData(balanceGraphArray);
	  })
	  .catch(() => {
            console.log("failed to get graph data");
	  })
      } 
    }
    getBalance();
  },[])
  return (
    <div className="portfolio-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Balance</p>
        <a className="portfolio-component-more-container" href="/balance">
          <img className="portfolio-component-more-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABTElEQVRIieWUMUjDQBSG/5dIM0kGuwniqqujS6C5lnQRZ+3iqqCroFCwo4NDcXCt4pDd0ISsAcHZjrq46ehg4PKchFCa+q7WQfzH/73//47jOOBfSSm13Wq1tkwylnQxCIJ1Irpl5pO5A7rdrqW1vgLgAKC5A7IsOwCwaVIsBvi+vwKgN0u5CGBZVh/A4qyAqfeplNolosGYPQLQKRta6+c0Td+MAJ7n1R3HGTFzXXDQgogOh8Nhf3xQeUW1Wu1CWA4AVtXznQhQSrUB7AjLv/QiBhDRmWE5mPlUDACwbNh/kyTJnRhARD0AhaSZiF7zPD+qnFcNGo3Gkm3bq2P2AMBa2WDmTpIk18aASWo2mw8ANkpWFMdxe1pG/JtO0DuA/e+WfgI4juP46bcA967rXkoWTQEM4MO27b0wDLUksGAIOGfmIoqiR8PcH9YneqVcD62jh4MAAAAASUVORK5CYII="/>
	  <hr className="portfolio-component-more-divider"></hr>
	  <p className="portfolio-component-more-header">More</p>
	</a>
      </div> 
      <div className="portfolio-component-balance-container">
        <p className="portfolio-component-balance">{balanceXTZ == 0 || null || undefined ? "0.00" : balanceXTZ}</p>
	<p className="portfolio-component-balance-tag">XTZ</p>
      </div>
      <p className="portfolio-component-balance-amount">$0</p>
      <div className="portfolio-component-button-container">
       <button className="portfolio-component-button">Send</button>
       <button className="portfolio-component-button">Buy</button>
      </div>
      <div className="portfolio-component-graph-balance-container">
        <div className="portfolio-component-graph-balance-box">
	  <div className="portfolio-component-balance-tag-container">
	    <p className="market-component-price-full-name">Last 7 Days</p>
	    <div className="portfolio-component-status-box">
	      <div className="portfolio-component-status"></div>
	    </div>
	  </div>
          <Sparklines data={balanceGraphData} limit={7}>
    	     <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
             <SparklinesSpots style={{fill: "#d8d8d8"}} />
          </Sparklines> 
        </div>
      </div>
    </div>
  )
}
