import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// styling
import './portfolio.css';

export default function Portfolio() {
  const { id } = useParams();
  return (
    <div className="Portfolio">
      <h1 className="portfolio-header">Portfolio</h1>
      <h2 className="portfolio-description">360º View of All Your Assets</h2>
      <div className="Top-container">
        {id === "balance" && (
          <div className="portfolio-balance-component">

	  </div>
        )}
	{id === "assets" && (
          <div className="portfolio-assets-component">

	  </div>
	)}
	{id === "tokens" && (
          <div className="portfolio-tokens-component">

	  </div>
	)}
      </div>
    </div>
  )
}
