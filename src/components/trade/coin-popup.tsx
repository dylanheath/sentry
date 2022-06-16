import React, {useEffect, useState} from 'react';

// styling
import './trade.css';

// assets
import XTZ from '../../assets/tokens/XTZ.png';
import CTEZ from '../../assets/tokens/ctez.png';
import USDtz from '../../assets/tokens/USDtz.svg';
import PLENTY from '../../assets/tokens/PLENTY.png';
import tzBTC from '../../assets/tokens/tzBTC.svg';

// utils
import { Tokens } from '../../utils/trade/tokens';

export default  function CoinPopup({popupStateOne, popupStateTwo, OneInput, TwoInput,
 setOneInput, setTwoInput, setPopupStateOne, setPopupStateTwo} :
{popupStateOne:boolean, popupStateTwo:boolean, OneInput:string, TwoInput:string,
 setOneInput:any, setTwoInput:any, setPopupStateOne:any,
 setPopupStateTwo:any}) {

 const handleSelection = (token:any) => {
	 if (popupStateOne == true && popupStateTwo == false) {
	   setOneInput(token);
	   setPopupStateOne(false);
	 } else if (popupStateTwo == true && popupStateOne == false) {
           setTwoInput(token);
	   setPopupStateTwo(false);
	 } 
 }

  const tokensList = Tokens.tokens.map((token:any) =>
    <button className="token-container" onClick={() => handleSelection(token)}>
      <img className="token-icon" loading="lazy" src={token.metadata.thumbnailUri.includes("ipfs://") ? `https://ipfs.io/ipfs/${token.metadata.thumbnailUri.slice(7)}` : token.metadata.thumbnailUri} />
      <p className="token-name">{token.metadata.symbol}</p>
    </button>
  );
  return (
    <div className="coin-popup-box">
      <div className="coin-popup-header-container">
        <p className="coin-popup-header">Select a Token</p>
	<svg className="coin-popup-exit" viewBox="0 0 24 24" width="20" height="20" role="img" onClick={() => popupStateOne == true && popupStateTwo == false ? setPopupStateOne(false) : setPopupStateTwo(false)} style={{fill: "rgb(70, 70, 70)"}}><path d="M5.15161 5.15162C5.37664 4.92666 5.68181 4.80028 6.00001 4.80028C6.3182 4.80028 6.62337 4.92666 6.84841 5.15162L12 10.3032L17.1516 5.15162C17.2623 5.03701 17.3947 4.94559 17.5411 4.8827C17.6875 4.81981 17.845 4.78671 18.0043 4.78532C18.1637 4.78394 18.3217 4.8143 18.4692 4.87464C18.6166 4.93497 18.7506 5.02408 18.8633 5.13675C18.976 5.24942 19.0651 5.3834 19.1254 5.53088C19.1857 5.67835 19.2161 5.83637 19.2147 5.99571C19.2133 6.15504 19.1802 6.3125 19.1173 6.45891C19.0544 6.60531 18.963 6.73773 18.8484 6.84842L13.6968 12L18.8484 17.1516C19.067 17.3779 19.1879 17.6811 19.1852 17.9957C19.1825 18.3103 19.0563 18.6113 18.8338 18.8338C18.6113 19.0563 18.3103 19.1825 17.9957 19.1852C17.6811 19.188 17.3779 19.067 17.1516 18.8484L12 13.6968L6.84841 18.8484C6.62208 19.067 6.31896 19.188 6.00432 19.1852C5.68969 19.1825 5.38871 19.0563 5.16622 18.8338C4.94373 18.6113 4.81753 18.3103 4.8148 17.9957C4.81206 17.6811 4.93302 17.3779 5.15161 17.1516L10.3032 12L5.15161 6.84842C4.92664 6.62339 4.80026 6.31822 4.80026 6.00002C4.80026 5.68183 4.92664 5.37666 5.15161 5.15162Z"></path></svg>
      </div>
      <div className="coin-popup-search-wrapper">
          <input className="coin-popup-search-container" type="text" placeholder="Search for Tokens" />
      </div>
      <div className="coin-popup-quick-select-tokens-container">
        <div className="coin-popup-quick-select-token-wrapper">
	  <div className="coin-popup-quick-select-token-image-container">
            <img className="coin-popup-quick-select-token-image" src={PLENTY} />
	  </div>
	  <p className="coin-popup-quick-select-token-name">PLENTY</p>
	</div>

        <div className="coin-popup-quick-select-token-wrapper">
	  <div className="coin-popup-quick-select-token-image-container">
            <img className="coin-popup-quick-select-token-image" src={CTEZ} />
	  </div>
	  <p className="coin-popup-quick-select-token-name">CTEZ</p>
	</div>

        <div className="coin-popup-quick-select-token-wrapper">
	  <div className="coin-popup-quick-select-token-image-container">
            <img className="coin-popup-quick-select-token-image" src={tzBTC} />
	  </div>
	  <p className="coin-popup-quick-select-token-name">tzBTC</p>
	</div>

        <div className="coin-popup-quick-select-token-wrapper">
	  <div className="coin-popup-quick-select-token-image-container">
            <img className="coin-popup-quick-select-token-image" src={USDtz} />
	  </div>
	  <p className="coin-popup-quick-select-token-name">USDtz</p>
	</div>
        </div>
	<div className="coin-popup-divider-container">
          <hr className="coin-popup-divider"></hr>
	</div>
	<div className="coin-popup-tokens-container">
	  {tokensList}
	</div>

    </div>
  )
}
