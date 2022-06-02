import React, {useEffect, useState} from 'react';

// styling
import './price.css';

export default function Price() {


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
          <p className="price-component-price">$0</p>
	  <div className="price-component-price-change-container">
            <p className="price-component-price-change">0</p>
	    <p>%</p>
	  </div>
	</div>
      </div>
      <div className="price-component-price-data-container">
        <div className="price-component-price-data-box">
          <p className="price-component-price-market-cap-tag">Market cap</p> 
	  <p className="price-component-price-market-cap">0</p>
	</div>
	<div className="price-component-price-data-box-container">
	  <div className="price-component-price-second-data-box">
	    <div className="price-component-data-line-container">
              <p className="price-component-price-market-cap-tag">Circulating Supply</p>
	      <p className="price-component-price-market-cap">0</p>
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
	      <p className="price-component-price-market-cap">0</p>
	    </div>
	  </div>
	</div>
      </div>
    </div>
  )
}
