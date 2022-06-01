import React, {useEffect, useState} from 'react';
import axios from 'axios';

// styling
import './portfolio.css';

// graph
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default function Balance() {

  return (
    <div className="portfolio-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Balance</p>
        <a className="portfolio-component-more-container" href="/balance">
          <img className="portfolio-component-more-image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABTElEQVRIieWUMUjDQBSG/5dIM0kGuwniqqujS6C5lnQRZ+3iqqCroFCwo4NDcXCt4pDd0ISsAcHZjrq46ehg4PKchFCa+q7WQfzH/73//47jOOBfSSm13Wq1tkwylnQxCIJ1Irpl5pO5A7rdrqW1vgLgAKC5A7IsOwCwaVIsBvi+vwKgN0u5CGBZVh/A4qyAqfeplNolosGYPQLQKRta6+c0Td+MAJ7n1R3HGTFzXXDQgogOh8Nhf3xQeUW1Wu1CWA4AVtXznQhQSrUB7AjLv/QiBhDRmWE5mPlUDACwbNh/kyTJnRhARD0AhaSZiF7zPD+qnFcNGo3Gkm3bq2P2AMBa2WDmTpIk18aASWo2mw8ANkpWFMdxe1pG/JtO0DuA/e+WfgI4juP46bcA967rXkoWTQEM4MO27b0wDLUksGAIOGfmIoqiR8PcH9YneqVcD62jh4MAAAAASUVORK5CYII="/>
	  <hr className="portfolio-component-more-divider"></hr>
	  <p className="portfolio-component-more-header">More</p>
	</a>
      </div> 
      <div className="portfolio-component-balance-container">
        <p className="portfolio-component-balance">0.00</p>
	<p className="portfolio-component-balance-tag">XTZ</p>
      </div>
      <p className="portfolio-component-balance-amount">$0</p>
      <div className="portfolio-component-button-container">
       <button className="portfolio-component-button">Send</button>
       <button className="portfolio-component-button">Buy</button>
      </div>
      <div className="portfolio-component-divider-container">
        <hr className="portfolio-component-divider"></hr>
      </div>
      <div className="portfolio-component-transactions">
        
      </div>
    </div>
  )
}
