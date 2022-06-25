import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

// styling
import './portfolio.css';

// wallet
import { getActiveAccount, getAddress } from '../../../utils/wallet/wallet';

// utils
import { xtzPrice } from '../../../utils/price/xtz';
import { balance } from '../../../utils/user/balance';
import { tokens } from '../../../utils/user/tokens';

type tokensObj = {
  tokens: Array<any>,
  list: Array<any>
}

export default function Assets() {
  const [total, setTotal] = useState<number>(0);
  const [totalCurrency, setTotalCurrency] = useState<number>(0);
  const [userTokens , setUserTokens] = useState<tokensObj>({tokens: [], list: []});
  const [price, setPrice] = useState<number>(0); 
  const [xtzBalance, setXtzBalance] = useState<number>(0);
  const [xtzTokens , setXtzTokens] = useState<number>(0);
  const [tokenCurrency, setTokensCurrency] = useState<number>(0);

  useEffect(() => {
    const getAssetsUtils = async () => {
      let CurrencyTotal: number = totalCurrency;
      let TokensTotalCurrency: number = total;
      const activeAccount = await getActiveAccount();
      let myAddress: String;
      const address = await getAddress();	
      if (activeAccount) {
        const getBalance= await balance(address)
	  .then((result:any) => {
            setXtzBalance(result / 1000000);
          })
	  .catch(() => {
            console.log("failed to get balance");
	  })
      }
      const price = await xtzPrice() 
        .then((result:any) => {
          setPrice(result[0].Price); 
        })
	.catch(() => {
          console.log("failed to get price");
	})
      const getTokens = await tokens(address) 
        .then((result:any) => {
	  result.tokens.map((token:any) => {
	      try {
              const FindToken = result.list.contracts.find((tk:any) => tk.symbol === token.token.metadata.symbol);
	      const TokenAmount = token.balance.slice(0, Number(- token.token.metadata.decimals)) + "." + token.balance.slice(Number(- token.token.metadata.decimals));
	      TokensTotalCurrency += FindToken.currentPrice * Number(TokenAmount);
              CurrencyTotal += FindToken.currentPrice * Number(TokenAmount);
	      } catch {
	      }        
	  })
          setTokensCurrency(TokensTotalCurrency);
        })
        .catch((err) => {
          console.log(`Failed to get Tokens, ${err}`); 
        })
      setTotalCurrency(CurrencyTotal);
    }
    getAssetsUtils();
    setInterval(function(){
	getAssetsUtils();
      },60 * 1000);
  }, [])
  return (
    <div className="portfolio-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Assets</p>
	<Link className="portfolio-component-more-container" to={"/portfolio/assets"}>
	  <svg viewBox="0 0 24 24" width="auto" height="16" style={{fill: "#464646"}} role="img"><path d="M8.39999 3.6001C8.08173 3.6001 7.77651 3.72653 7.55147 3.95157C7.32642 4.17661 7.19999 4.48184 7.19999 4.8001C7.19999 5.11836 7.32642 5.42358 7.55147 5.64863C7.77651 5.87367 8.08173 6.0001 8.39999 6.0001H15.6C15.9183 6.0001 16.2235 5.87367 16.4485 5.64863C16.6736 5.42358 16.8 5.11836 16.8 4.8001C16.8 4.48184 16.6736 4.17661 16.4485 3.95157C16.2235 3.72653 15.9183 3.6001 15.6 3.6001H8.39999ZM4.79999 8.4001C4.79999 8.08184 4.92642 7.77661 5.15147 7.55157C5.37651 7.32653 5.68173 7.2001 5.99999 7.2001H18C18.3183 7.2001 18.6235 7.32653 18.8485 7.55157C19.0736 7.77661 19.2 8.08184 19.2 8.4001C19.2 8.71836 19.0736 9.02358 18.8485 9.24863C18.6235 9.47367 18.3183 9.6001 18 9.6001H5.99999C5.68173 9.6001 5.37651 9.47367 5.15147 9.24863C4.92642 9.02358 4.79999 8.71836 4.79999 8.4001ZM2.39999 13.2001C2.39999 12.5636 2.65285 11.9531 3.10294 11.503C3.55302 11.053 4.16347 10.8001 4.79999 10.8001H19.2C19.8365 10.8001 20.447 11.053 20.897 11.503C21.3471 11.9531 21.6 12.5636 21.6 13.2001V18.0001C21.6 18.6366 21.3471 19.2471 20.897 19.6972C20.447 20.1472 19.8365 20.4001 19.2 20.4001H4.79999C4.16347 20.4001 3.55302 20.1472 3.10294 19.6972C2.65285 19.2471 2.39999 18.6366 2.39999 18.0001V13.2001Z"></path></svg>
	  <hr className="portfolio-component-more-divider"></hr>
	  <p className="portfolio-component-more-header">More</p>
	</Link>
      </div>
      <div className="portfolio-component-assets-total-container">
        <p className="portfolio-component-assets-total">{(totalCurrency) == 0 ? "0" : (totalCurrency + xtzBalance).toFixed(2)}</p>
	<p className="portfolio-component-balance-tag">XTZ</p>
      </div>
      <p className="portfolio-component-balance-amount">${((price * xtzBalance) + price * totalCurrency).toFixed(2)}</p>
      <div className="portfolio-component-assets-container">
        <div className="portfolio-component-asset-box">
	  <div className="portfolio-component-asset-header-container">
            <p className="portfolio-component-asset-header">XTZ</p>
	    <div className="portfolio-component-asset-percentage-box">
	      <p className="portfolio-component-asset-percentage">{totalCurrency ==  0 ? "0" : ((price * xtzBalance) / (price * xtzBalance + price * totalCurrency) * 100).toFixed(2)}</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="portfolio-component-asset-balance-container">
	    <p className="portfolio-component-asset-balance">{(xtzBalance).toFixed(2)}</p>
            <p className="portfolio-component-asset-currency">${(price * xtzBalance).toFixed(2)}</p>
	  </div>
	</div>
        <div className="portfolio-component-asset-box">
	  <div className="portfolio-component-asset-header-container">
            <p className="portfolio-component-asset-header">Tokens</p>
	    <div className="portfolio-component-asset-percentage-box">
              <p className="portfolio-component-asset-percentage">{totalCurrency == 0 ? "0" : ((price * totalCurrency) / (price * xtzBalance + price * totalCurrency) * 100).toFixed(2)}</p>
              <p>%</p>
	    </div>
	  </div>
	  <div className="portfolio-component-asset-balance-container">
	    <p className="portfolio-component-asset-balance">{(tokenCurrency).toFixed(2)}</p>
	    <p className="portfolio-component-asset-currency">${(price * tokenCurrency).toFixed(2)}</p>
	  </div>
	</div>	
        <div className="portfolio-component-asset-box">
	  <div className="portfolio-component-asset-header-container">
            <p className="portfolio-component-asset-header">Farms</p>
	    <div className="portfolio-component-asset-percentage-box">
              <p className="portfolio-component-asset-percentage">0</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="portfolio-component-asset-balance-container">
	    <p className="portfolio-component-asset-balance">0</p>
 	    <p className="portfolio-component-asset-currency">$0</p>
	  </div>
	</div>
	<div className="portfolio-component-asset-box">
	  <div className="portfolio-component-asset-header-container">
            <p className="portfolio-component-asset-header">Liquidity</p>
	    <div className="portfolio-component-asset-percentage-box">
              <p className="portfolio-component-asset-percentage">0</p>
	      <p>%</p>
	    </div>
	  </div>
	  <div className="portfolio-component-asset-balance-container">
	    <p className="portfolio-component-asset-balance">0</p>
 	    <p className="portfolio-component-asset-currency">$0</p>
	  </div>
	</div>
      </div>
    </div>
  )
}
