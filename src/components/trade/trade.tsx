import React, { useEffect, useState } from 'react';

// styling
import './trade.css';

// options
// send 1 
// swap 2 
// liquidity 3

// tokens
import XTZ from '../../assets/tokens/XTZ.png';

// components
import CoinPopup from './coin-popup';

export default function TradeBox() {
  const [tradeSelect, setTradeSelect] = useState<number>();
  const [popupOne, setPopupOne] = useState<boolean>(false);
  const [popupTwo, setPopupTwo] = useState<boolean>(false);
  const [coinInputOne, setCoinInputOne] = useState<any>("");
  const [coinInputTwo, setCoinInputTwo] = useState<any>("");
  return (
  <>
   {popupOne == true && popupTwo == false && (
     <>
       <div className="trade-component-model-container">
         <CoinPopup popupStateOne={popupOne} popupStateTwo={popupTwo}
           OneInput={coinInputOne} setOneInput={setCoinInputOne} TwoInput={coinInputTwo}
	     setTwoInput={setCoinInputTwo} setPopupStateOne={setPopupOne} 
	     setPopupStateTwo={setPopupTwo}   />
	</div>
     </>
    )}
    {popupTwo == true && popupOne == false && (
       <div className="trade-component-model-container">
         <CoinPopup popupStateOne={popupOne} popupStateTwo={popupTwo}
           OneInput={coinInputOne} setOneInput={setCoinInputOne} TwoInput={coinInputTwo}
	     setTwoInput={setCoinInputTwo} setPopupStateOne={setPopupOne} 
	     setPopupStateTwo={setPopupTwo}   />
       </div>
    )}
    <div className="trade-component-container">
      <div className="trade-component-header-container">
        <div className="trade-component-header-wrapper">

	</div> 
      </div>
     <div className="trade-component-inputs-container">
      <div className="trade-component-input-container">
        <div className="trade-component-input-select">
	  <div className="trade-component-inputs-selection-container">
            <input className="trade-component-input" defaultValue={(0).toFixed(2)} />
            <button className="trade-component-coin-select-container" onClick={() =>setPopupOne(true)}>
	      <div className="trade-component-coin-select-image-container">
	        <img className="trade-component-coin-select-image" src={XTZ} />
	      </div>
	      <p className="trade-component-coin-name">TEZ</p>
	      <div className="trade-component-coin-select-arrow-container">
	        <svg viewBox="0 0 24 24" width="22" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M6.3516 8.7516C6.57663 8.52663 6.8818 8.40026 7.2 8.40026C7.5182 8.40026 7.82337 8.52663 8.0484 8.7516L12 12.7032L15.9516 8.7516C16.0623 8.63699 16.1947 8.54557 16.3411 8.48268C16.4875 8.41979 16.645 8.38668 16.8043 8.3853C16.9637 8.38391 17.1217 8.41428 17.2691 8.47461C17.4166 8.53495 17.5506 8.62405 17.6633 8.73673C17.7759 8.8494 17.865 8.98338 17.9254 9.13085C17.9857 9.27833 18.0161 9.43635 18.0147 9.59568C18.0133 9.75502 17.9802 9.91248 17.9173 10.0589C17.8544 10.2053 17.763 10.3377 17.6484 10.4484L12.8484 15.2484C12.6234 15.4734 12.3182 15.5997 12 15.5997C11.6818 15.5997 11.3766 15.4734 11.1516 15.2484L6.3516 10.4484C6.12663 10.2234 6.00026 9.9182 6.00026 9.6C6.00026 9.2818 6.12663 8.97663 6.3516 8.7516Z"></path></svg>
	      </div>
	    </button>
	  </div>
	</div>
	<p className="trade-component-converted-price">0.00</p>
      </div>
      <div className="trade-component-arrow-container">
        <div className="trade-component-arrow-wrapper">
	  <svg viewBox="0 0 24 24" width="auto" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M6.35152 15.2485C6.12648 15.0234 6.00005 14.7182 6.00005 14.4V7.69676L4.44845 9.24836C4.22213 9.46695 3.919 9.58791 3.60437 9.58517C3.28973 9.58244 2.98876 9.45624 2.76627 9.23375C2.54378 9.01126 2.41757 8.71028 2.41484 8.39565C2.41211 8.08101 2.53306 7.77789 2.75165 7.55156L6.35165 3.95156C6.57668 3.7266 6.88185 3.60022 7.20005 3.60022C7.51825 3.60022 7.82342 3.7266 8.04845 3.95156L11.6484 7.55156C11.867 7.77789 11.988 8.08101 11.9853 8.39565C11.9825 8.71028 11.8563 9.01126 11.6338 9.23375C11.4113 9.45624 11.1104 9.58244 10.7957 9.58517C10.4811 9.58791 10.178 9.46695 9.95165 9.24836L8.40005 7.69676V14.4C8.40005 14.7182 8.27362 15.0234 8.04858 15.2485C7.82353 15.4735 7.51831 15.6 7.20005 15.6C6.88179 15.6 6.57657 15.4735 6.35152 15.2485ZM18 9.5999C18 9.28164 17.8736 8.97642 17.6486 8.75137C17.4235 8.52633 17.1183 8.3999 16.8 8.3999C16.4818 8.3999 16.1765 8.52633 15.9515 8.75137C15.7265 8.97642 15.6 9.28164 15.6 9.5999V16.3031L14.0484 14.7515C13.8221 14.5329 13.519 14.412 13.2043 14.4147C12.8897 14.4174 12.5887 14.5436 12.3662 14.7661C12.1438 14.9886 12.0175 15.2896 12.0148 15.6042C12.0121 15.9189 12.133 16.222 12.3516 16.4483L15.9516 20.0483C16.1767 20.2733 16.4818 20.3996 16.8 20.3996C17.1182 20.3996 17.4234 20.2733 17.6484 20.0483L21.2484 16.4483C21.467 16.222 21.588 15.9189 21.5852 15.6042C21.5825 15.2896 21.4563 14.9886 21.2338 14.7661C21.0113 14.5436 20.7103 14.4174 20.3957 14.4147C20.0811 14.412 19.7779 14.5329 19.5516 14.7515L18 16.3031V9.5999Z"></path></svg>
	</div>
      </div>
      <div className="trade-component-input-container">
        <div className="trade-component-input-select">
	  <div className="trade-component-inputs-selection-container">
            <input className="trade-component-input" defaultValue={(0).toFixed(2)} />
	    <button className="trade-component-coin-select-container" onClick={() => setPopupTwo(true)}>
	      <div className="trade-component-coin-select-image-container">
	        <img className="trade-component-coin-select-image" src={XTZ} />
	      </div>
	      <p className="trade-component-coin-name">TEZ</p>
	      <div className="trade-component-coin-select-arrow-container">
	        <svg viewBox="0 0 24 24" width="20" height="20" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M6.3516 8.7516C6.57663 8.52663 6.8818 8.40026 7.2 8.40026C7.5182 8.40026 7.82337 8.52663 8.0484 8.7516L12 12.7032L15.9516 8.7516C16.0623 8.63699 16.1947 8.54557 16.3411 8.48268C16.4875 8.41979 16.645 8.38668 16.8043 8.3853C16.9637 8.38391 17.1217 8.41428 17.2691 8.47461C17.4166 8.53495 17.5506 8.62405 17.6633 8.73673C17.7759 8.8494 17.865 8.98338 17.9254 9.13085C17.9857 9.27833 18.0161 9.43635 18.0147 9.59568C18.0133 9.75502 17.9802 9.91248 17.9173 10.0589C17.8544 10.2053 17.763 10.3377 17.6484 10.4484L12.8484 15.2484C12.6234 15.4734 12.3182 15.5997 12 15.5997C11.6818 15.5997 11.3766 15.4734 11.1516 15.2484L6.3516 10.4484C6.12663 10.2234 6.00026 9.9182 6.00026 9.6C6.00026 9.2818 6.12663 8.97663 6.3516 8.7516Z"></path></svg>
	      </div>
	    </button>
	  </div>
	</div>
	<p className="trade-component-converted-price">0.00</p>
      </div>
      <div className="trade-component-complete-button-wrapper">
        <button className="trade-component-complete-button">
          Send
	</button>
      </div>
     </div>
    </div>
   </>
  )
}
