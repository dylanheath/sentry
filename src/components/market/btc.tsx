import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

// styling
import './market.css';

// graph
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

// utils
import { btcPrice } from '../../utils/price/btc';

type coinData = {
  price: number,
  sparkline: Array<number>
  change: number
  id: string
}

export default function Btc() {
  const [price, setPrice] = useState<coinData>({price: 0, sparkline: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  change: 0, id: ""});
  
  useEffect(() => {
    const getBtc = async () => {
      const getPrice = await btcPrice()
        .then((result:any) => {
           const marketObj = {
	     price: result.market_data.current_price.usd,
             sparkline: result.market_data.sparkline_7d.price,
	     change: result.market_data.price_change_percentage_7d,
             id: result.id
           }
          setPrice(marketObj);
        })
	.catch(() => {
          console.log("failed to get price");
        })
    } 
    getBtc();
    setInterval(function(){
        getBtc();
      },60 * 1000);
  }, [])

  return (
    <Link className="market-component" to={`/market/${price.id}`}>
      <div className="market-component-header-container">
        <p className="market-component-header">BTC - USD</p>
	<div className="market-component-price-container">
          <p className="market-component-price">${(price.price).toLocaleString()}</p>
          <div className="market-component-price-update-status-wrapper">
	    <div className="market-component-price-update-status"></div>
	  </div>
	</div>
      </div>
      <p className="market-component-price-name">Bitcoin</p>
      <div className="market-component-price-change-tag-container">
        <div className="market-component-price-change-wrapper">
          <p className="market-component-price-change">{(price.change).toFixed(2)}</p>  
	  <p>%</p>
	</div>
      </div>
      <div className="market-component-price-graph-container">
        <Sparklines data={price.sparkline}>
    	  <SparklinesLine style={{ fill: "#b34714" }} color="#ea5e1b" />
          <SparklinesSpots style={{fill: "#d8d8d8"}} />
        </Sparklines>
      </div>
    </Link>
  )
}
