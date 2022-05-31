import React, {useEffect, useState} from 'react';
import axios from 'axios';

// styling
import './portfolio.css';

export default function Balance() {

  return (
    <div className="portfolio-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Balance</p>
        <a className="portfolio-component-more-header">view more</a>
      </div> 
      <div className="portfolio-component-balance-container">
        <p className="portfolio-component-balance">100.789</p>
	<p className="portfolio-component-balance-tag">XTZ</p>
      </div>
      <p className="portfolio-component-balance-amount">$100</p>
      <div className="portfolio-component-button-container">
       <button className="portfolio-component-button">Send</button>
       <button className="portfolio-component-button">Buy</button>
      </div>
    </div>
  )
}
