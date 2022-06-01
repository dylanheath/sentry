import React, {useEffect, useState} from 'react';

// styling
import './price.css';

// graph 
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default function Market() {

  return (
    <div className="price-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Market</p>
        <a className="portfolio-component-more-container">
          <p className="price-component-real-time-header">Real-Time</p>
          <hr className="portfolio-component-more-divider"></hr>
          <p className="portfolio-component-more-header">More</p>
        </a>
      </div>
      <div className="market-component-prices-container">
        <a className="market-component-prices-box">
          <div className="market-component-prices-header-container">
            <p className="market-component-prices-name">BTC - USD</p>
	    <div className="market-component-price-update-status-container">
	      <p className="market-component-price">$0</p>
	      <div className="market-component-price-update-status-wrapper">
                <div className="market-component-price-update-status"></div>
	      </div>
	    </div>
	  </div>
	  <div className="market-component-price-change-container">
	    <div className="market-component-price-change-wrapper">
	      <p className="price-component-price-change">0</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="market-component-price-graph-container">
            <Sparklines data={[10,10,20,30,60,50,60,120]}>
    	      <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
              <SparklinesSpots style={{fill: "#b34714"}} />
            </Sparklines>
	  </div>
          <div className="market-component-price-more-container">
            <a className="market-component-more-header">view market</a>
	    <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
	  </div>
	</a>
        <a className="market-component-prices-box">
          <div className="market-component-prices-header-container">
            <p className="market-component-prices-name">ETH - USD</p>
	    <div className="market-component-price-update-status-container">
	      <p className="market-component-price">$0</p>
	      <div className="market-component-price-update-status-wrapper">
                <div className="market-component-price-update-status"></div>
	      </div>
	    </div>
	  </div>
	  <div className="market-component-price-change-container">
	    <div className="market-component-price-change-wrapper">
              <p className="price-component-price-change">0</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="market-component-price-graph-container">
	    <Sparklines data={[10,10,20,30,60,50,60,120]}>
    	      <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
              <SparklinesSpots style={{fill: "#b34714"}} />
            </Sparklines>
	  </div>
	  <div className="market-component-price-more-container">
            <a className="market-component-more-header">view market</a>
	    <div className="market-component-more-image-container">
	      <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
	    </div>
	  </div>
	</a>
      </div>
    </div>
  )
}
