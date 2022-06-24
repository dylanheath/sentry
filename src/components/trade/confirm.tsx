import React, {useEffect, useState} from 'react'; 

// styling 
import './trade.css';

export default function Confirm({inputOne, inputTwo, inputOneUsd, inputTwoUsd, OneAmount, TwoAmount, popupStatus,
  setPopupStatus, tradeOption, priceUpdate, slippage} : {inputOne:any,
  inputTwo:any, inputOneUsd:any, inputTwoUsd:any, OneAmount:number, TwoAmount:number, popupStatus:boolean,
  setPopupStatus:any, tradeOption:string , priceUpdate:boolean, slippage:number}) {

  return (
     <div className="confirm-component">
       <div className="confirm-component-header-container">
         <p className="confirm-component-header">Confirm</p>
         <svg className="confirm-component-close" onClick={() => setPopupStatus(true)} viewBox="0 0 24 24" width="20" height="20" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M5.15161 5.15162C5.37664 4.92666 5.68181 4.80028 6.00001 4.80028C6.3182 4.80028 6.62337 4.92666 6.84841 5.15162L12 10.3032L17.1516 5.15162C17.2623 5.03701 17.3947 4.94559 17.5411 4.8827C17.6875 4.81981 17.845 4.78671 18.0043 4.78532C18.1637 4.78394 18.3217 4.8143 18.4692 4.87464C18.6166 4.93497 18.7506 5.02408 18.8633 5.13675C18.976 5.24942 19.0651 5.3834 19.1254 5.53088C19.1857 5.67835 19.2161 5.83637 19.2147 5.99571C19.2133 6.15504 19.1802 6.3125 19.1173 6.45891C19.0544 6.60531 18.963 6.73773 18.8484 6.84842L13.6968 12L18.8484 17.1516C19.067 17.3779 19.1879 17.6811 19.1852 17.9957C19.1825 18.3103 19.0563 18.6113 18.8338 18.8338C18.6113 19.0563 18.3103 19.1825 17.9957 19.1852C17.6811 19.188 17.3779 19.067 17.1516 18.8484L12 13.6968L6.84841 18.8484C6.62208 19.067 6.31896 19.188 6.00432 19.1852C5.68969 19.1825 5.38871 19.0563 5.16622 18.8338C4.94373 18.6113 4.81753 18.3103 4.8148 17.9957C4.81206 17.6811 4.93302 17.3779 5.15161 17.1516L10.3032 12L5.15161 6.84842C4.92664 6.62339 4.80026 6.31822 4.80026 6.00002C4.80026 5.68183 4.92664 5.37666 5.15161 5.15162Z"></path></svg>
       </div>
       <div className="confirm-component-amount-container">
         <div className="trade-component-input-container">
           <div className="trade-component-input-select">
             <div className="trade-component-inputs-selection-container">
               <div className="confirm-component-final-amount-container">
                 <p className="confirm-component-final-amount">{(OneAmount).toFixed(2)}</p>
	       </div>
	       <div className="trade-component-coin-select-container">
	         <div className="trade-component-coin-select-image-container">
                   <img className="trade-component-coin-select-image" src={inputOne.metadata.thumbnailUri} />
		 </div>
                 <p className="trade-component-coin-name" style={{fontFamily: "Arial"}}>TEZ</p>
	       </div>
	     </div>
	   </div>
	   <p className="trade-component-converted-price">${(inputOneUsd).toFixed(2)}</p>
	 </div>
	 <div className="trade-component-arrow-container">
           <div className="trade-component-arrow-wrapper">
             <svg viewBox="0 0 24 24" width="auto" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M6.35152 15.2485C6.12648 15.0234 6.00005 14.7182 6.00005 14.4V7.69676L4.44845 9.24836C4.22213 9.46695 3.919 9.58791 3.60437 9.58517C3.28973 9.58244 2.98876 9.45624 2.76627 9.23375C2.54378 9.01126 2.41757 8.71028 2.41484 8.39565C2.41211 8.08101 2.53306 7.77789 2.75165 7.55156L6.35165 3.95156C6.57668 3.7266 6.88185 3.60022 7.20005 3.60022C7.51825 3.60022 7.82342 3.7266 8.04845 3.95156L11.6484 7.55156C11.867 7.77789 11.988 8.08101 11.9853 8.39565C11.9825 8.71028 11.8563 9.01126 11.6338 9.23375C11.4113 9.45624 11.1104 9.58244 10.7957 9.58517C10.4811 9.58791 10.178 9.46695 9.95165 9.24836L8.40005 7.69676V14.4C8.40005 14.7182 8.27362 15.0234 8.04858 15.2485C7.82353 15.4735 7.51831 15.6 7.20005 15.6C6.88179 15.6 6.57657 15.4735 6.35152 15.2485ZM18 9.5999C18 9.28164 17.8736 8.97642 17.6486 8.75137C17.4235 8.52633 17.1183 8.3999 16.8 8.3999C16.4818 8.3999 16.1765 8.52633 15.9515 8.75137C15.7265 8.97642 15.6 9.28164 15.6 9.5999V16.3031L14.0484 14.7515C13.8221 14.5329 13.519 14.412 13.2043 14.4147C12.8897 14.4174 12.5887 14.5436 12.3662 14.7661C12.1438 14.9886 12.0175 15.2896 12.0148 15.6042C12.0121 15.9189 12.133 16.222 12.3516 16.4483L15.9516 20.0483C16.1767 20.2733 16.4818 20.3996 16.8 20.3996C17.1182 20.3996 17.4234 20.2733 17.6484 20.0483L21.2484 16.4483C21.467 16.222 21.588 15.9189 21.5852 15.6042C21.5825 15.2896 21.4563 14.9886 21.2338 14.7661C21.0113 14.5436 20.7103 14.4174 20.3957 14.4147C20.0811 14.412 19.7779 14.5329 19.5516 14.7515L18 16.3031V9.5999Z"></path></svg>
	   </div>
	 </div>
         <div className="trade-component-input-container">
           <div className="trade-component-input-select">
             <div className="trade-component-inputs-selection-container">
               <div className="confirm-component-final-amount-container">
                 <p className="confirm-component-final-amount">{(TwoAmount).toFixed(2)}</p>
	       </div>
	       <div className="trade-component-coin-select-container">
	         <div className="trade-component-coin-select-image-container">
                   <img className="trade-component-coin-select-image" src={inputTwo.metadata.thumbnailUri} />
		 </div>
                 <p className="trade-component-coin-name" style={{fontFamily: "Arial"}}>TEZ</p>
	       </div>
	     </div>
	   </div>
	   <p className="trade-component-converted-price">${(inputTwoUsd).toFixed(2)}</p>
	 </div>
       </div>
       <div className="confirm-component-transaction-container">

       </div>
       <div className="confirm-component-price-status-container">
         {priceUpdate === false && (
         <div className="price-update-status">
	   <p className="price-update">up to date</p>
	 </div>
	 )}
         {priceUpdate ===  true && (
         <div className="price-update-status">
           <p className="price-update">updating prices</p>
	   <svg className="price-update-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="auto" viewBox="0 0 30 30" style={{fill: "rgb(216, 216, 216)"}}><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path></svg>
	 </div>
         )}
       </div>
       <div className="confirm-component-transaction-details-wrapper">
         <div className="confirm-component-transaction-details-container">
           <div className="confirm-component-transaction-slippage-container">
             <p className="confirm-component-transaction-slippage-tag">Slippage</p>
	     <p className="confirm-component-transaction-slippage">{slippage}%</p>
	   </div>
	 </div>
       </div>
       <div className="confirm-component-transaction-button-container">
         <button className="trade-component-complete-button">{tradeOption === "swap" ? "Swap" : tradeOption === "send" ? "Send" : tradeOption === "liquidity" ? "Add Liquidity" : ""}</button>
       </div>
     </div> 
  )
}
