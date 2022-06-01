import React, { useEffect, useState } from 'react';

// styling 
import './home.css';

// components
import Balance from '../components/home/portfolio/balance';
import Assets from '../components/home/portfolio/assets';
import Tokens from '../components/home/portfolio/tokens';
import Price from '../components/home/price/price';
import Analytics from '../components/home/price/analytics';
import Market from '../components/home/price/market';

export default function Home() {
  
  return (
    <div className="Home">
      <h1 className="home-header">Your Portfolio</h1>
      <h2 className="home-description">View & Track your Assets</h2>
      <div className="Top-container">
        <Balance /> 
	<Assets />
	<Tokens />
      </div>
      <div className="home-header-description-container">
        <h1 className="home-header">Price</h1>
        <h2 className="home-description">Track Prices & the Market</h2>
      </div>
      <div className="Middle-container">
        <Price />
	<Analytics />
	<Market />
      </div>
      <div className="Bottom-container">
      </div>
    </div>
  )
}

