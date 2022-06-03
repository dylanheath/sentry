import React, {useEffect, useState} from 'react';

export default function Analytics() {

  return (
    <div className="price-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Analytics</p>
        <a className="portfolio-component-more-container">
	  <hr className="portfolio-component-more-divider"></hr>
          <p className="price-component-real-time-header">24hr</p>
          <hr className="portfolio-component-more-divider"></hr>
        </a>
      </div>
      <div className="analytics-component-all-time-container">
        <p className="price-component-price-name">XTZ - USD</p>
	<div className="analytics-component-all-time-price-container">
	<p className="price-component-price">$0</p>
	<div className="analytics-component-all-time-tag-container">
	  <p className="analytics-component-all-time-tag">0</p>
	  <p>%</p>
	  <div className="price-component-divider-container">
	    <hr className="portfolio-component-more-divider"></hr>
	  </div>
	  <p className="analytics-component-all-time-high-tag">high</p>
	</div>
	</div>
      </div>
    </div>
  )
}
