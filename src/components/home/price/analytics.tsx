import React, {useEffect, useState} from 'react';

export default function Analytics() {

  return (
    <div className="price-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Analytics</p>
        <a className="portfolio-component-more-container">
          <p className="price-component-real-time-header">Real-Time</p>
          <hr className="portfolio-component-more-divider"></hr>
          <p className="portfolio-component-more-header">More</p>
        </a>
      </div>
      <div className="analytics-component-all-time-container">
        <p className="analytics-component-all-time">$0</p>
	<div className="analytics-component-all-time-tag-container">
	  <p className="analytics-component-all-time-tag">24</p>
	  <p>hr</p>
	</div>
      </div>
      <p className="analytics-component-all-time-change-tag">change</p>
      <p className="analytics-component-all-time-change">0%</p>
    </div>
  )
}
