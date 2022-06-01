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
        <div className="market-component-prices-box">
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
	</div>
        <div className="market-component-prices-box">
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
	</div>
      </div>
    </div>
  )
}
