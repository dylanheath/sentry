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
import Releases from '../components/home/more/releases';
import Status from '../components/home/more/status';

export default function Home({activeWallet} : {activeWallet:Boolean}) {
  useEffect(() => {
    document.title = "sentry"
  }, [])
  return (
    <div className="Home">
      <h1 className="home-header">Your Portfolio</h1>
      <h2 className="home-description">View & Track your Assets</h2>
      <div className="Top-container">
        {activeWallet === true && (
	  <>
            <Balance /> 
	    <Assets />
	    <Tokens />
	  </>
	)}
	{activeWallet === false && (
          <div className="home-wallet-prompt">
            <div className="home-wallet-prompt-box">
            <svg viewBox="0 0 24 24" width="24" height="24" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M 21.6 12 C 21.6 17.302 17.302 21.6 12 21.6 C 6.698 21.6 2.4 17.302 2.4 12 C 2.4 6.698 6.698 2.4 12 2.4 C 17.302 2.4 21.6 6.698 21.6 12 Z M 12 6 C 11.337 6 10.8 6.537 10.8 7.2 C 10.8 7.863 11.337 8.4 12 8.4 C 12.663 8.4 13.2 7.863 13.2 7.2 C 13.2 6.537 12.663 6 12 6 Z M 10.8 10.8 C 10.137 10.8 9.6 11.337 9.6 12 C 9.6 12.663 10.137 13.2 10.8 13.2 L 10.8 16.8 C 10.8 17.463 11.337 18 12 18 L 13.2 18 C 13.863 18 14.4 17.463 14.4 16.8 C 14.4 16.137 13.863 15.6 13.2 15.6 L 13.2 12 C 13.2 11.337 12.663 10.8 12 10.8 Z"></path></svg>
	    <p className="home-wallet-prompt-message">Connect your Wallet to view your Portfolio</p>
	    </div>
	  </div>
	)}
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
      <div className="home-header-description-container">
        <h1 className="home-header">More</h1>
        <h2 className="home-description">View Releases, Server Status & More</h2>
      </div>
      <div className="Bottom-container">
        <Releases />
	<Status />
      </div>
      <div className="Footer-container">

      </div>
    </div>
  )
}

