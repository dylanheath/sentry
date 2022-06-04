import React, {useEffect, useState} from 'react';

// styling
import './price.css';

// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import { xtzPrice, xtzSparkline } from '../../../utils/price/xtz';

type xtzDataObj = {
  ATH: number,
  ATH_change: number,
  ATH_date: string,
  ATL: number,
  ATL_change: number,
  ATL_date: string,
  CircSupply: number,
  High_24: number,
  Low_24: number,
  MarketCap: number,
  Price: number,
  PriceChange: number,
  Price_change: number,
  Price_change_24: number,
  Volume: number,
  ROI: number
}

export default function Price() {
  const [xtzData, setXtzData] = useState<xtzDataObj>({
	ATH: 0, ATH_change: 0, ATH_date: "", ATL: 0, ATL_change: 0, ATL_date: "",
        CircSupply: 0, High_24: 0, Low_24: 0, MarketCap: 0, Price: 0, PriceChange: 0,
        Price_change: 0, Price_change_24: 0, Volume: 0, ROI: 0 }); 
  const [xtzGraph, setXtzGraph] = useState<Array<number>>([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]);
  useEffect(() => {
    const getPrice = async () => {
      let priceGraph: Array<number> = [];
      const priceData = await xtzPrice()
        .then((result:any) => {
          setXtzData(result[0]); 
	})
	.catch(() => {
          console.log("failed to get price data");
        })
      const sparklineData = await xtzSparkline()
        .then((result:any) => {
          setXtzGraph(result.market_data.sparkline_7d.price);
	})
	.catch(() => {
          console.log("failed to get sparkline data");
	})
    }
    getPrice();
    setInterval(function(){
        getPrice();
      },60 * 1000);
  }, [])
  return (
    <div className="price-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Price</p>
        <a className="portfolio-component-more-container">
	  <hr className="portfolio-component-more-divider"></hr>
	  <p className="price-component-real-time-header">Real-Time</p>
	  <hr className="portfolio-component-more-divider"></hr>
	</a>
      </div>
      <div className="price-component-price-container">
	<p className="price-component-price-name">XTZ - USD</p>
	<div className="price-component-price-percent-container">
          <p className="price-component-price">${xtzData.Price}</p>
	  <div className="market-component-price-update-status-container"><div className="market-component-price-update-status-wrapper"><div className="market-component-price-update-status"></div></div></div>
	</div>
      </div>
      <div className="price-component-price-data-container">
        <div className="price-component-price-data-box">
          <p className="price-component-price-market-cap-tag">Market cap</p> 
	  <p className="price-component-price-market-cap">{(xtzData.MarketCap).toLocaleString()}</p>
	</div>
	<div className="price-component-price-data-box-container">
	  <div className="price-component-price-second-data-box">
	    <div className="price-component-data-line-container">
              <p className="price-component-price-market-cap-tag">Circulating Supply</p>
	      <p className="price-component-price-market-cap">{xtzData.CircSupply}</p>
	    </div>
	    <div className="price-component-data-divider-container">
              <hr className="price-component-data-divider"></hr>
	    </div>
	    <div className="price-component-price-volume-container">
	      <div className="price-component-price-line-container">
	      <p className="price-component-price-market-cap">Volume</p>
	      <div className="price-component-price-data-tag-wrapper">
	        <div className="price-component-price-change-container">
	          <p className="price-component-price-change">24</p>
	          <p>hr</p>
	         </div>
	      </div>
	      </div>
	      <p className="price-component-price-market-cap">${(xtzData.Volume).toLocaleString()}</p>
	    </div>
	    <div className="price-component-data-divider-container">
              <hr className="price-component-data-divider"></hr>
	    </div>
	    <div className="price-component-price-volume-container">
	      <div className="price-component-price-line-container">
	      <p className="price-component-price-market-cap">Roi</p>
	      <div className="price-component-price-data-tag-wrapper">
	        <div className="price-component-price-change-container">
	          <p>return on investment</p>
	         </div>
	      </div>
	      </div>
	      <p className="price-component-price-market-cap">{(xtzData.ROI).toFixed(2)}%</p>
	    </div>
	  </div>
	</div>
	<div className="price-component-graph-container">
	  <a className="price-component-graph-box">
	  <div className="market-component-prices-header-container">
	    <p className="market-component-prices-name">XTZ - USD</p>
	    <div className="market-component-price-update-status-container">
	      <div className="market-component-price-update-status-wrapper">
	      <div className="market-component-price-update-status"></div></div></div></div>
	      <p className="market-component-price-full-name">Tezos</p>
	    <div className="price-component-price-graph-container">
              <Sparklines data={xtzGraph} limit={24}>
    	        <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
                <SparklinesSpots style={{fill: "#d8d8d8"}} />
              </Sparklines>
	    </div>
	    <div className="market-component-price-more-container"><a className="market-component-more-header">view market</a><div className="market-component-more-image-container"><svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg></div></div>
	  </a>
	</div>
      </div>
    </div>
  )
}
