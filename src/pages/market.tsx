import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

// styling
import './market.css';

// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import {Price} from '../utils/price/price';

type coinData = {
  price: number,
  sparkline: Array<number>
  change: number
  id: string
  name: string
  symbol: string
  supply: number
  volume: number
  market_cap: number
  roi: number | string
  description: string
}
 
export default function Market() {
  const [marketData, setMarketData] = useState<coinData>({price: 0, change: 0, id: "",
  sparkline: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], name: "", symbol: "", supply: 0, volume: 0, roi: "",
  market_cap: 0, description: ""})
  const { id } = useParams();

  useEffect(() => {
    const getMarket = async () => {
      const getMarketAnalytics = await Price(id) 
        .then((result:any) => {
	   const marketObj = {
	     price: result.market_data.current_price.usd,
             sparkline: result.market_data.sparkline_7d.price,
	     change: result.market_data.price_change_percentage_7d,
	     id: result.id,
	     name: result.name,
	     symbol: result.symbol,
	     supply: result.market_data.circulating_supply,
	     volume: result.market_data.total_volume.usd,
	     roi: (result.market_data.roi == null ? "?" : (result.market_data.roi.percentage).toFixed(2)),
	     market_cap: result.market_data.market_cap.usd,
	     description: result.description.en
           }
	   setMarketData(marketObj)
	   document.title = `sentry | ${(marketObj.symbol).toUpperCase()} - USD`
        })
	.catch(() => {
          console.log("failed to get market data");
	})
    }
    getMarket()
    setInterval(function(){
        getMarket();
      },60 * 1000);
  }, [])
  return (
    <div className="Market">
      <div className="market-data-container">
        <div className="market-data-graph-container">
          <div className="market-data-graph-header-container">
            <p className="market-data-graph-header">{(marketData.symbol).toUpperCase()} - USD</p>
            <div className="market-component-price-update-status-container">
	      <p className="market-data-graph-price">${(marketData.price).toLocaleString()}</p>
	      <div className="market-component-price-update-status-wrapper">
	        <div className="market-component-price-update-status"></div>
		</div>
	      </div>
	    </div>
	    <p className="market-data-name">{marketData.name}</p>
	    <div className="market-data-change-container">
              <div className="market-data-change-wrapper">
                <p className="market-data-change">{(marketData.change).toFixed(2)}</p>
	      </div>
	    </div>
	  <div className="market-data-graph-component-container">
            <Sparklines data={marketData.sparkline}>
    	      <SparklinesLine style={{ fill: "#b34714", strokeWidth: 0.5 }} color="#ea5e1b" />
              <SparklinesSpots style={{fill: "#d8d8d8"}} />
            </Sparklines>
	  </div>
	</div>
        <div className="market-data-analytics-container">
          <div className="market-data-graph-header-container">
            <p className="market-data-analytics-header">Analytics</p>
	  </div>
          <div className="market-data-market-analytics-container"> 
	    <div className="market-data-market-cap-container">
              <p className="market-data-market-cap">Market cap</p>
	      <p className="market-data-market-cap">${marketData.market_cap < 1 ? "?" : (marketData.market_cap).toLocaleString()}</p>
	    </div>
	  </div>
	  <div className="market-data-market-analytics-container">
            <div className="market-data-analytic-container">
              <div className="market-data-line-container">
	        <p className="market-data-market-cap">Circulating supply</p>
	        <p className="market-data-market-cap">{marketData.supply < 1 ? "?" :(marketData.supply).toLocaleString()}</p>
	      </div>
	      <div className="price-component-data-divider-container">
  	        <hr className="price-component-data-divider"></hr>
	      </div>
	      <div className="market-data-line-container">
	        <p className="market-data-market-cap">Volume</p>
	        <p className="market-data-market-cap">{(marketData.volume).toLocaleString()}</p>
	      </div>
	      <div className="price-component-data-divider-container">
  	        <hr className="price-component-data-divider"></hr>
	      </div>
	      <div className="market-data-line-container">
	        <p className="market-data-market-cap">Roi</p>
	        <p className="market-data-market-cap">{marketData.roi}{marketData.roi !== "?" ? "%": ""}</p>
	      </div>
	    </div>
            <div className="market-data-links-container">
              <a className="more-component-release-options-box" href="https://www.moonpay.com/buy">
	        <div className="more-component-release-options-header-container">
		  <p className="more-component-release-options-header">Buy</p>
		  <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}>
		  <path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
		  </div>
		  <div className="more-component-release-options-footer-container">
		    <p className="more-component-release-options-footer">Buy {(marketData.symbol).toUpperCase()} via MoonPay</p>
		  </div>
	      </a>
              </div>
	  </div>
	</div>
      </div>
    </div>
  )
}

