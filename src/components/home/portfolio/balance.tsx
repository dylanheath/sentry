import React, {useEffect, useState} from 'react';
import axios from 'axios';

// styling
import './portfolio.css';

import { connectWallet, getActiveAccount } from '../../../utils/wallet/wallet';
// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import { balance } from '../../../utils/user/balance';

export default function Balance() {
  const [balance, setBalance] = useState<number>(0);
  const [balanceCurrency, setBalanceCurrency] = useState<number>(0);

  useEffect(() => {
    const getBalance = async () => {
      const balanceRequest = await balance();	
    } 
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
        <p className="portfolio-component-balance">{balance == 0 ? "0.00" : balance}</p>
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
          <Sparklines data={[1000,100,10,20,30,60,50,60,120]}>
    	     <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
             <SparklinesSpots style={{fill: "#d8d8d8"}} />
          </Sparklines> 
        </div>
      </div>
    </div>
  )
}
