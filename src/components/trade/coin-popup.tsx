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
 const [favorite, setFavorite] = useState<any>([]);

 useEffect(() => {
   try {
   setFavorite(JSON.parse(localStorage.getItem('favorites') || ""));
   console.log(localStorage.getItem('favorites') || "");
   } catch {
     console.log("no favorites");
   }
}, [])

 const handleSelection = (token:any) => {
	 if (popupStateOne == true && popupStateTwo == false) {
	   setOneInput(token);
	   setPopupStateOne(false);
	 } else if (popupStateTwo == true && popupStateOne == false) {
           setTwoInput(token);
	   setPopupStateTwo(false);
	 } 
 }

 const handleFavorite = (token:object) => {
   const favorites = [...favorite];
   if (favorites.length < 5) {
     favorites.push(token);
     setFavorite(favorites);
     localStorage.setItem('favorites', JSON.stringify(favorites));
   }
 }

 const removeFavorite = (token:object) => {
   const favorites = [...favorite];
   const tokenIndex = favorites.indexOf(token);
   favorites.splice(tokenIndex);
   setFavorite(favorites);
   localStorage.setItem('favorites', JSON.stringify(favorites));
 }

  const tokensList = Tokens.tokens.map((token:any) =>
    <div className="token-wrapper">
      <button className="token-container" onClick={() => OneInput === token ? "" : TwoInput === token ? "" : handleSelection(token)} style={ OneInput === token ? {WebkitFilter: "blur(2px)", msFilter: "blur(2px)"} : TwoInput === token ? {WebkitFilter: "blur(2px)", msFilter: "blur(2px)"} : {WebkitFilter: "unset", msFilter: "unset"}}>
        <div className="token-info-container">
          <img className="token-icon" loading="lazy" src={token.metadata.thumbnailUri.includes("ipfs://") ? `https://ipfs.io/ipfs/${token.metadata.thumbnailUri.slice(7)}` : token.metadata.thumbnailUri} />
          <p className="token-name">{token.metadata.symbol}</p>
        </div>
      </button>
      <div className="token-favorite-icon-container">
        <svg className="token-favorite-icon" onClick={() => favorite.find((tk:any) => tk.metadata.name === token.metadata.name) ? removeFavorite(token) :  handleFavorite(token)} style={favorite.find((tk:any) => tk.metadata.name === token.metadata.name) ? {fill: "#d8d8d8"} : {fill: "rgb(70, 70,70)"}} viewBox="0 0 24 24" width="16" height="auto" role="img"><path d="M18.7882 18.7881C16.9879 20.5885 14.5461 21.5999 12 21.5999C9.45392 21.5999 7.01212 20.5885 5.21177 18.7881C3.41142 16.9878 2.39999 14.546 2.39999 11.9999C2.39999 9.45382 3.41142 7.01203 5.21177 5.21168C7.01212 3.41133 9.45392 2.3999 12 2.3999C14.5461 2.3999 16.9879 3.41133 18.7882 5.21168C20.5886 7.01203 21.6 9.45382 21.6 11.9999C21.6 14.546 20.5886 16.9878 18.7882 18.7881ZM12 17.9999C15.3137 17.9999 18 15.3136 18 11.9999C18 8.68619 15.3137 5.9999 12 5.9999C8.68629 5.9999 5.99999 8.68619 5.99999 11.9999C5.99999 15.3136 8.68629 17.9999 12 17.9999Z"></path></svg>
      </div>
    </div>
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
