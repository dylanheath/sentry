import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// styling
import './portfolio.css';

import { connectWallet, getActiveAccount, getAddress } from '../../../utils/wallet/wallet';
// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import { balance, balanceGraph} from '../../../utils/user/balance';
import { xtzPrice } from '../../../utils/price/xtz';

export default function Balance() {
  const [balanceXTZ, setBalanceXTZ] = useState<number>(0);
  const [balanceGraphData, setBalanceGraphData] = useState<Array<number>>([1,1,1,1,1,1,1,1,1]);
  const [balanceCurrency, setBalanceCurrency] = useState<number>(0);
  const [graphStatus, setGraphStatus] = useState<boolean>(false);

  useEffect(() => {
    setGraphStatus(true);
    const getPrice = async () => {
      const price = await xtzPrice() 
        .then((result:any) => {
          setBalanceCurrency(result[0].Price); 
        })
	.catch(() => {
          console.log("failed to get price");
	})
    }
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
	    setGraphStatus(false);
	  })
	  .catch(() => {
            console.log("failed to get graph data");
	  })
      } 
    }
    getPrice();
    getBalance();
    setInterval(function(){
        getPrice();
	getBalance();
      },60 * 1000);
  },[])
  return (
    <div className="portfolio-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Balance</p>
        <Link className="portfolio-component-more-container" to={"/portfolio/balance"}>
          <img className="portfolio-component-more-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABTElEQVRIieWUMUjDQBSG/5dIM0kGuwniqqujS6C5lnQRZ+3iqqCroFCwo4NDcXCt4pDd0ISsAcHZjrq46ehg4PKchFCa+q7WQfzH/73//47jOOBfSSm13Wq1tkwylnQxCIJ1Irpl5pO5A7rdrqW1vgLgAKC5A7IsOwCwaVIsBvi+vwKgN0u5CGBZVh/A4qyAqfeplNolosGYPQLQKRta6+c0Td+MAJ7n1R3HGTFzXXDQgogOh8Nhf3xQeUW1Wu1CWA4AVtXznQhQSrUB7AjLv/QiBhDRmWE5mPlUDACwbNh/kyTJnRhARD0AhaSZiF7zPD+qnFcNGo3Gkm3bq2P2AMBa2WDmTpIk18aASWo2mw8ANkpWFMdxe1pG/JtO0DuA/e+WfgI4juP46bcA967rXkoWTQEM4MO27b0wDLUksGAIOGfmIoqiR8PcH9YneqVcD62jh4MAAAAASUVORK5CYII="/>
	  <hr className="portfolio-component-more-divider"></hr>
	  <p className="portfolio-component-more-header">More</p>
	</Link>
      </div> 
      <div className="portfolio-component-balance-container">
        <p className="portfolio-component-balance">{balanceXTZ == 0 || null || undefined ? "0.00" : balanceXTZ}</p>
	<p className="portfolio-component-balance-tag">XTZ</p>
      </div>
      <p className="portfolio-component-balance-amount">${(balanceCurrency * balanceXTZ).toFixed(2)}</p>
      <div className="portfolio-component-button-container">
       <button className="portfolio-component-button">Send</button>
       <button className="portfolio-component-button">Buy</button>
      </div>
      <div className="portfolio-component-graph-balance-container">
        <div className="portfolio-component-graph-balance-box">
	  <div className="portfolio-component-balance-tag-container">
	    <p className="market-component-price-full-name">Last 7 Days</p>
       {graphStatus === true && (
	  <div style={{display: "flex", flexDirection: "row", gap: "14px"}}>
            <p className="price-component-update-status">updating price</p> 
	    <svg className="price-update-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="auto" viewBox="0 0 30 30" style={{fill: "rgb(216, 216, 216)"}}><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path></svg>
	  </div>
	)}
        {graphStatus === false && (
          <>
	  <div className="block-status-active"></div>
	  </>
        )}

	  </div>
          <Sparklines data={balanceGraphData} limit={7}>
    	     <SparklinesLine style={{ fill: "#d8d8d8" }} color="#d8d8d8" />
             <SparklinesSpots style={{fill: "#d8d8d8"}} />
          </Sparklines> 
        </div>
      </div>
    </div>
  )
}
