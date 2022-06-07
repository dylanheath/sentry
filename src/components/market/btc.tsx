import React, {useState, useEffect} from 'react';

// styling
import './market.css';

// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default function Btc() {

  return (
    <div className="market-component">
      <div className="market-component-header-container">
        <p className="market-component-header">BTC - USD</p>
      </div>
    </div>
  )
}
