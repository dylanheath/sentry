import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// styling
import './market.css';

// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import {Price} from '../../utils/price/price';

type coinData = {
  price: number,
  sparkline: Array<number>
  change: number,
  symbol: string,
  name: string,
  id: string
}

export default function PriceComponent({market} : {market:any}) {
  const [price, setPrice] = useState<coinData>({price: 0, sparkline: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    change: 0, symbol: "", name: "", id: ""});
  
  useEffect(() => {
    const getPrice = async () => {
      const getPrice = await Price(market)
        .then((result:any) => {
           const marketObj = {
	     price: result.market_data.current_price.usd,
             sparkline: result.market_data.sparkline_7d.price,
	     change: result.market_data.price_change_percentage_7d,
	     symbol: result.symbol,
	     name: result.name,
	     id: result.id,
           }
          setPrice(marketObj);
        })
	.catch(() => {
          console.log("failed to get price");
        })
    } 
    getPrice();
    setInterval(function(){
        getPrice();
      },60 * 1000);
  }, [])

  return (
    <Link className="market-component" to={`/market/${price.id}`}>
      <div className="market-component-header-container">
        <p className="market-component-header">{(price.symbol).toUpperCase()} - USD</p>
	<div className="market-component-price-container">
          <p className="market-component-price">${(price.price).toLocaleString()}</p>
          <div className="market-component-price-update-status-wrapper">
	    <div className="market-component-price-update-status"></div>
	  </div>
	</div>
      </div>
      <p className="market-component-price-name">{price.name}</p>
      <div className="market-component-price-change-tag-container">
        <div className="market-component-price-change-wrapper">
          <p className="market-component-price-change">{(price.change).toFixed(2)}</p>  
	  <p>%</p>
	</div>
      </div>
      <div className="market-component-price-graph-container">
        {price.sparkline.length > 1 && (
          <Sparklines data={price.sparkline}>
    	    <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
            <SparklinesSpots style={{fill: "#d8d8d8"}} />
          </Sparklines>
	)}
	<>
	  {price.sparkline.length < 1 && (
	    <div className="market-data-not-found-container">
              <p className="market-data-not-found">Sparkline Not Available</p>
	    </div>
	  )}
	</>
      </div>
    </Link>
  )
}
