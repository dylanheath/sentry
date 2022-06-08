import React, {useState, useEffect} from 'react';

// styling 
import './market.css';

// popular components
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

// all markets component
import PriceComponent from '../components/market/price';

// utils
import { marketList } from '../utils/price/marketlist';

export default function Market() {

  return (
    <div className="Market">
      <div className="market-header-container">
        <h1 className="market-header">Markets</h1>
      </div>
      <div className="market-description-container">
        <h2 className="market-description">View Markets & Pricing</h2>
      </div>
      <div className="Top-market-container">
        <div className="top-all-markets-container">
          <div className="top-tezos-markets-header-container">
            <h4 className="top-all-markets-header">Popular</h4> 
	  </div>
	  <div className="top-all-markets-components-container">
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
	    <div className="top-more-market-container">

	    </div>
	  </div>
	</div>

        <div className="top-all-markets-container">
          <div className="top-all-markets-header-container">
            <h4 className="top-all-markets-header">All Markets</h4>
	  </div>
	  <div className="top-all-markets-components-container">
	    <PriceComponent market={marketList[Math.floor((Math.random() * 4) + 0)]} />
            <PriceComponent market={marketList[Math.floor((Math.random() * 7) +  5)]} />
            <PriceComponent market={marketList[Math.floor((Math.random() * 10) +  9)]} />
            <PriceComponent market={marketList[Math.floor((Math.random() * 13) + 11)]} />
	    <PriceComponent market={marketList[Math.floor((Math.random() * 16) + 14)]} />
	    <PriceComponent market={marketList[Math.floor((Math.random() * 19) + 17)]} />
	    <PriceComponent market={marketList[Math.floor((Math.random() * 22) + 20)]} />
	  </div>
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
