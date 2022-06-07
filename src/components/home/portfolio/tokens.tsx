import React, {useEffect, useState} from 'react';

// styling
import './portfolio.css';

// wallet
import { getActiveAccount, getAddress } from '../../../utils/wallet/wallet';

// utils
import { tokens } from '../../../utils/user/tokens';
import { xtzPrice } from '../../../utils/price/xtz';

export default function Tokens() {
  const [tokensTotalCurrency, setTokensTotalCurrency] = useState<number>(0);
  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    const ownedTokens = async () => {
       let CurrencyTotal: number = tokensTotalCurrency;
       let myAddress: String;
       const activeAccount = await getActiveAccount();
       const address = await getAddress();
       if (activeAccount) {
       const getTokens = await tokens(address) 
          .then((result:any) => {
	    result.tokens.map((token:any) => {
	      // @ts-ignore
              const FindToken = result.list.contracts.find(tk => tk.symbol === token.token.metadata.symbol);
	      const TokenAmount = token.balance.slice(0, Number(- token.token.metadata.decimals)) + "." + token.balance.slice(Number(- token.token.metadata.decimals));
              CurrencyTotal += FindToken.currentPrice * Number(TokenAmount);
	    })
            setTokensTotalCurrency(CurrencyTotal);
         })
        .catch(() => {
          console.log("failed to get user tokens"); 
        })
       const getPrice = await xtzPrice()
         .then((result:any) => {
           setPrice(result[0].Price);
	 })
         .catch(() => {
           console.log("failed to get price");
         })
      }
    }
    ownedTokens();
    setInterval(function(){
	ownedTokens();
      },60 * 1000);
  }, [])
  return (
    <div className="portfolio-component">
      <div className="portfolio-component-header-container">
        <p className="portfolio-component-header">Tokens</p>
	<div className="portfolio-component-more-container">
          <svg viewBox="0 0 24 24" width="auto" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M6.35152 15.2485C6.12648 15.0235 6.00005 14.7182 6.00005 14.4V7.69678L4.44845 9.24838C4.22213 9.46697 3.919 9.58792 3.60437 9.58519C3.28973 9.58245 2.98876 9.45625 2.76627 9.23376C2.54378 9.01127 2.41757 8.7103 2.41484 8.39566C2.41211 8.08102 2.53306 7.7779 2.75165 7.55158L6.35165 3.95158C6.57668 3.72661 6.88185 3.60023 7.20005 3.60023C7.51825 3.60023 7.82342 3.72661 8.04845 3.95158L11.6484 7.55158C11.867 7.7779 11.988 8.08102 11.9853 8.39566C11.9825 8.7103 11.8563 9.01127 11.6338 9.23376C11.4113 9.45625 11.1104 9.58245 10.7957 9.58519C10.4811 9.58792 10.178 9.46697 9.95165 9.24838L8.40005 7.69678V14.4C8.40005 14.7182 8.27362 15.0235 8.04858 15.2485C7.82353 15.4736 7.51831 15.6 7.20005 15.6C6.88179 15.6 6.57657 15.4736 6.35152 15.2485ZM17.9999 9.60002C17.9999 9.28176 17.8735 8.97654 17.6484 8.7515C17.4234 8.52645 17.1182 8.40002 16.7999 8.40002C16.4816 8.40002 16.1764 8.52645 15.9514 8.7515C15.7263 8.97654 15.5999 9.28176 15.5999 9.60002V16.3032L14.0483 14.7516C13.822 14.533 13.5189 14.4121 13.2042 14.4148C12.8896 14.4176 12.5886 14.5438 12.3661 14.7662C12.1436 14.9887 12.0174 15.2897 12.0147 15.6043C12.012 15.919 12.1329 16.2221 12.3515 16.4484L15.9515 20.0484C16.1765 20.2734 16.4817 20.3998 16.7999 20.3998C17.1181 20.3998 17.4233 20.2734 17.6483 20.0484L21.2483 16.4484C21.4669 16.2221 21.5878 15.919 21.5851 15.6043C21.5824 15.2897 21.4562 14.9887 21.2337 14.7662C21.0112 14.5438 20.7102 14.4176 20.3956 14.4148C20.0809 14.4121 19.7778 14.533 19.5515 14.7516L17.9999 16.3032V9.60002Z"></path></svg>
	  <hr className="portfolio-component-more-divider"></hr>
	  <p className="portfolio-component-more-header">More</p>
	</div>
       </div>
      <div className="portfolio-component-assets-total-container">
        <p className="portfolio-component-assets-total">{(tokensTotalCurrency).toFixed(2)}</p>
	<p className="portfolio-component-balance-tag">XTZ</p>
      </div>
      <p className="portfolio-component-balance-amount">${(price * tokensTotalCurrency).toFixed(2)}</p>
      <div className="portfolio-component-assets-container">
        <div className="portfolio-component-tokens-container">

	</div>
	<div className="portfolio-component-tokens-options-container">
          <a className="portfolio-component-tokens-option">
            <div className="portfolio-component-tokens-option-header-container">
              <p className="portfolio-component-tokens-option-header">Swap</p> 
	      <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
	    </div>
            <p className="portfolio-component-tokens-option-description">Swap your Tokens</p>
	  </a>
          <a className="portfolio-component-tokens-option">
            <div className="portfolio-component-tokens-option-header-container">
              <p className="portfolio-component-tokens-option-header">Farms / Liquidity</p>
	      <svg viewBox="0 0 24 24" width="16" height="16" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
	    </div>
	    <p className="portfolio-component-tokens-option-description">Earn with your Tokens</p>
	  </a>
	</div>
      </div>
    </div>
  )
}
