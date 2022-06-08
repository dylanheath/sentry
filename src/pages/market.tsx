import React, {useState, useEffect} from 'react';

// styling 
import './market.css';

// components
import Btc from '../components/market/btc';
import Eth from '../components/market/eth';
import Usdt from '../components/market/usdt';
import Usdc from '../components/market/usdc';
import Bnb from '../components/market/bnb';
import Ada from '../components/market/ada';
import Xrp from '../components/market/xrp';
import Busd from '../components/market/busd';
import Sol from '../components/market/sol';
import Doge from '../components/market/doge';

export default function Market() {

 // show random market components using array

  return (
    <div className="Market">
      <div className="market-header-container">
        <h1 className="market-header">Markets</h1>
      </div>
      <div className="market-description-container">
        <h2 className="market-description">View Markets & Pricing</h2>
      </div>
      <div className="Top-container">
        <div className="top-all-markets-container">
          <div className="top-tezos-markets-header-container">
            <h4 className="top-all-markets-header">Popular</h4> 
	  </div>
	  <div className="top-all-markets-component-container">
            <Btc />
	    <Eth /> 
	    <Usdt />
	    <Usdc />
            <Bnb />
	    <Ada />
	    <Xrp />
	    <Busd />
	    <Sol />
	    <Doge />
	  </div>
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
