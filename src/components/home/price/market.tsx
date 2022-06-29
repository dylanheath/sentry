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
  useEffect(() =>{
    const getPrices = async () => {
     const getBtcPrice = await btcPrice()
       .then((result:any) => {
         const marketObj = {
	   price: result.market_data.current_price.usd,
           sparkline: result.market_data.sparkline_7d.price,
	   change: result.market_data.price_change_percentage_7d
         }
         setBtcData(marketObj); 
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
