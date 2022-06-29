import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// styling
import './price.css';

// graph 
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import { btcPrice } from '../../../utils/price/btc';
import { ethPrice } from '../../../utils/price/eth';

type coinData = {
  price: number,
  sparkline: Array<number>
  change: number
}

export default function Market() {
  const [btcData, setBtcData] = useState<coinData>({price: 0, sparkline: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], change: 0});
  const [ethData, setEthData] = useState<coinData>({price: 0, sparkline: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], change: 0});
  const [ethStatus, setEthStatus] = useState<boolean>(false);
  const [btcStatus, setBtcStatus] = useState<boolean>(false);
  useEffect(() =>{
    setBtcStatus(true);
    setEthStatus(true);
    const getPrices = async () => {
     const getBtcPrice = await btcPrice()
       .then((result:any) => {
         const marketObj = {
	   price: result.market_data.current_price.usd,
           sparkline: result.market_data.sparkline_7d.price,
	   change: result.market_data.price_change_percentage_7d
         }
         setBtcData(marketObj); 
	 setBtcStatus(false);
       })
       .catch(() => {
         console.log("failed to get btc data");
       })

     const getEthPrice = await ethPrice()
       .then((result:any) => {
         const marketObj = {
	   price: result.market_data.current_price.usd,
           sparkline: result.market_data.sparkline_7d.price,
	   change: result.market_data.price_change_percentage_7d
         }
         setEthData(marketObj);
	 setEthStatus(false);
       })
       .catch(() => {
         console.log("failed to get eth data"); 
       })
    }
    getPrices();
    setInterval(function(){
        getPrices();
      },60 * 1000);
  }, [])
  return (
    <div className="price-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Market</p>
        <a className="portfolio-component-more-container" href="/market">
          <p className="price-component-real-time-header">Real-Time</p>
          <hr className="portfolio-component-more-divider"></hr>
          <p className="portfolio-component-more-header">More</p>
        </a>
      </div>
      <div className="market-component-prices-container">
        <Link className="market-component-prices-box" to={`/market/${"bitcoin"}`}>
          <div className="market-component-prices-header-container">
            <p className="market-component-prices-name">BTC - USD</p>
	    <div className="market-component-price-update-status-container">
	      <p className="market-component-price">${(btcData.price).toLocaleString()}</p>
        {btcStatus === true && (
	  <>
            <p className="price-component-update-status">updating price</p> 
	    <svg className="price-update-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="auto" viewBox="0 0 30 30" style={{fill: "rgb(216, 216, 216)"}}><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path></svg>
	  </>
	)}
        {btcStatus === false && (
          <>
	  <div className="block-status-active"></div>
	  </>
        )}

	    </div>
	  </div>
	  <p className="market-component-price-full-name">Bitcoin</p>
	  <div className="market-component-price-change-container">
	    <div className="market-component-price-change-wrapper">
	      <p className="price-component-price-change">{(btcData.change).toFixed(2)}</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="market-component-price-graph-container">
            <Sparklines data={btcData.sparkline}>
    	      <SparklinesLine style={{ fill: "#d8d8d8" }} color="#d8d8d8" />
              <SparklinesSpots style={{fill: "#d8d8d8"}} />
            </Sparklines>
	  </div>
	</Link>
        <Link className="market-component-prices-box" to={`/market/${"ethereum"}`}>
          <div className="market-component-prices-header-container">
            <p className="market-component-prices-name">ETH - USD</p>
	    <div className="market-component-price-update-status-container">
	      <p className="market-component-price">${(ethData.price).toLocaleString()}</p>
        {ethStatus === true && (
	  <>
            <p className="price-component-update-status">updating price</p> 
	    <svg className="price-update-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="auto" viewBox="0 0 30 30" style={{fill: "rgb(216, 216, 216)"}}><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path></svg>
	  </>
	)}
        {ethStatus === false && (
          <>
	  <div className="block-status-active"></div>
	  </>
        )}

	    </div>
	  </div>
	  <p className="market-component-price-full-name">Ethereum</p>
	  <div className="market-component-price-change-container">
	    <div className="market-component-price-change-wrapper">
              <p className="price-component-price-change">{(ethData.change).toFixed(2)}</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="market-component-price-graph-container">
	    <Sparklines data={ethData.sparkline}>
    	      <SparklinesLine style={{ fill: "#d8d8d8" }} color="#d8d8d8" />
              <SparklinesSpots style={{fill: "#d8d8d8"}} />
            </Sparklines>
	  </div>
	</Link>
      </div>
    </div>
  )
}
