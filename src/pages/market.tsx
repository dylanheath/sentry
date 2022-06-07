import React, {useState, useEffect} from 'react';

// styling 
import './market.css';

// components
import Btc from '../components/market/btc';

export default function Market() {

  return (
    <div className="Market">
      <div className="market-header-container">
        <h1 className="market-header">Markets</h1>
      </div>
      <div className="market-description-container">
        <h2 className="market-description">View Markets & Pricing</h2>
      </div>
      <div className="Top-container">
        <div className="top-tezos-markets-container">
          <div className="top-tezos-markets-header-container">
            <h4 className="top-all-markets-header">Popular</h4> 
	  </div>
          <Btc />
	</div>

        <div className="top-all-markets-container">
          <div className="top-all-markets-header-container">
            <h4 className="top-all-markets-header">All Markets</h4>
	  </div>
          <Btc />
	</div>
	<div className="top-tezos-markets-container">
          <div className="top-tezos-markets-header-container">
            <h4 className="top-all-markets-header">Tezos</h4> 
	  </div>
          <Btc />
	</div>
      </div>
    </div>
  )
}
