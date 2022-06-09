import React, {useEffect, useState} from 'react';

// styling 
import './price.css';

export default function News() {

  return (
    <div className="price-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">News</p>
        <a className="portfolio-component-more-container" href="/market">
          <p className="price-component-real-time-header">Real-Time</p>
          <hr className="portfolio-component-more-divider"></hr>
          <p className="portfolio-component-more-header">More</p>
        </a>
      </div>
    </div>
  )
}
