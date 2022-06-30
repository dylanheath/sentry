import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// styling
import './portfolio.css';

// components
import Balance from '../components/portfolio/balance';
import Assets from '../components/portfolio/assets';
import Tokens from '../components/portfolio/tokens';
import Transactions from '../components/portfolio/transactions';

export default function Portfolio() {
  const { id } = useParams();
  return (
    <div className="Portfolio">
      <h1 className="portfolio-header">Portfolio</h1>
      <h2 className="portfolio-description">360º View of All Your Assets</h2>
      <div className="Top-portfolio-container">
        <Balance />
	<div className="Middle-component-container">
          <Transactions />
	</div>
      </div>
    </div>
  )
}
