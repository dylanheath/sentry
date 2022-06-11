import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

// components
import Swap from '../components/trade/swap';
import Send from '../components/trade/send';
import Liquidity from '../components/trade/liquidity';
import TradeBox from '../components/trade/trade';

// styling
import './trade.css';

export default function Trade() {
  const [tradeOption, setTradeOptions] = useState<string>();
  const { id } = useParams();
  return (
    <div className="Trade">
      {id == null && (
       <>
        <h1 className="trade-header">Trade</h1>
        <h2 className="trade-description">Send, Swap & Add Liquidity</h2>
       </>
      )}
        {id && ( 
	 <>
	 <div className="trade-container">
	  <div className="trade-options-wrapper">
           <div className="trade-option-container">
              <button className="trade-option-button">Send</button>
	      <button className="trade-option-button">Swap</button>
              <button className="trade-option-button">Liquidity</button>
            </div>
	   </div>
	 </div>
         <div className="trade-component-wrapper">
	   <TradeBox /> 
	 </div>

         </>
         )}
	{id  == null && (
          <>
            <div className="trade-options-container">
	      <Link className="trade-options-box" to={`/trade/send`}>
                <div className="trade-options-header-container">
                  <p className="trade-options-header">Send</p>
		  <svg viewBox="0 0 24 24" width="22" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
		</div>
                <div className="trade-options-image-container">
		  <svg viewBox="0 0 24 24" width="auto" height="60" role="img" style={{fill:"rgba(70,70,70, 0.2)"}}><path d="M12.3442 3.94396C12.5693 3.71899 12.8744 3.59261 13.1926 3.59261C13.5108 3.59261 13.816 3.71899 14.041 3.94396L21.241 11.144C21.466 11.369 21.5924 11.6742 21.5924 11.9924C21.5924 12.3106 21.466 12.6157 21.241 12.8408L14.041 20.0408C13.9303 20.1554 13.7979 20.2468 13.6515 20.3097C13.5051 20.3726 13.3477 20.4057 13.1883 20.4071C13.029 20.4084 12.871 20.3781 12.7235 20.3177C12.576 20.2574 12.442 20.1683 12.3294 20.0556C12.2167 19.943 12.1276 19.809 12.0673 19.6615C12.0069 19.514 11.9766 19.356 11.9779 19.1967C11.9793 19.0373 12.0124 18.8799 12.0753 18.7335C12.1382 18.5871 12.2296 18.4547 12.3442 18.344L17.4958 13.1924L3.59264 13.1924C3.27438 13.1924 2.96915 13.0659 2.74411 12.8409C2.51907 12.6158 2.39264 12.3106 2.39264 11.9924C2.39264 11.6741 2.51907 11.3689 2.74411 11.1438C2.96915 10.9188 3.27438 10.7924 3.59264 10.7924L17.4958 10.7924L12.3442 5.64076C12.1193 5.41572 11.9929 5.11055 11.9929 4.79236C11.9929 4.47416 12.1193 4.16899 12.3442 3.94396V3.94396Z"></path></svg>
		</div>
		<div className="trade-options-description-container">
                  <p className="trade-options-description">Send your XTZ & Tokens</p>
		</div>
	      </Link>
              <Link className="trade-options-box" to={`/trade/swap`}>
                <div className="trade-options-header-container">
                  <p className="trade-options-header">Swap</p>
		  <svg viewBox="0 0 24 24" width="22" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
		</div>
		<div className="trade-options-image-container">
                  <svg viewBox="0 0 24 24" width="auto" height="60" role="img" style={{fill: "rgba(70, 70, 70, 0.2)"}}><path d="M6.35152 15.2485C6.12648 15.0235 6.00005 14.7182 6.00005 14.4V7.69678L4.44845 9.24838C4.22213 9.46697 3.919 9.58792 3.60437 9.58519C3.28973 9.58245 2.98876 9.45625 2.76627 9.23376C2.54378 9.01127 2.41757 8.7103 2.41484 8.39566C2.41211 8.08102 2.53306 7.7779 2.75165 7.55158L6.35165 3.95158C6.57668 3.72661 6.88185 3.60023 7.20005 3.60023C7.51825 3.60023 7.82342 3.72661 8.04845 3.95158L11.6484 7.55158C11.867 7.7779 11.988 8.08102 11.9853 8.39566C11.9825 8.7103 11.8563 9.01127 11.6338 9.23376C11.4113 9.45625 11.1104 9.58245 10.7957 9.58519C10.4811 9.58792 10.178 9.46697 9.95165 9.24838L8.40005 7.69678V14.4C8.40005 14.7182 8.27362 15.0235 8.04858 15.2485C7.82353 15.4736 7.51831 15.6 7.20005 15.6C6.88179 15.6 6.57657 15.4736 6.35152 15.2485ZM17.9999 9.60002C17.9999 9.28176 17.8735 8.97654 17.6484 8.7515C17.4234 8.52645 17.1182 8.40002 16.7999 8.40002C16.4816 8.40002 16.1764 8.52645 15.9514 8.7515C15.7263 8.97654 15.5999 9.28176 15.5999 9.60002V16.3032L14.0483 14.7516C13.822 14.533 13.5189 14.4121 13.2042 14.4148C12.8896 14.4176 12.5886 14.5438 12.3661 14.7662C12.1436 14.9887 12.0174 15.2897 12.0147 15.6043C12.012 15.919 12.1329 16.2221 12.3515 16.4484L15.9515 20.0484C16.1765 20.2734 16.4817 20.3998 16.7999 20.3998C17.1181 20.3998 17.4233 20.2734 17.6483 20.0484L21.2483 16.4484C21.4669 16.2221 21.5878 15.919 21.5851 15.6043C21.5824 15.2897 21.4562 14.9887 21.2337 14.7662C21.0112 14.5438 20.7102 14.4176 20.3956 14.4148C20.0809 14.4121 19.7778 14.533 19.5515 14.7516L17.9999 16.3032V9.60002Z"></path></svg>
		</div>
		<div className="trade-options-description-container">
                  <p className="trade-options-description">Swap your XTZ for a range of Tokens</p>
		</div>
	      </Link>
 	      <Link className="trade-options-box" to={`/trade/liquidity`}>
                <div className="trade-options-header-container">
                  <p className="trade-options-header">Liquidity</p>
		  <svg viewBox="0 0 24 24" width="22" height="22" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M3.59999 3.59998C3.28173 3.59998 2.97651 3.7264 2.75147 3.95145C2.52642 4.17649 2.39999 4.48172 2.39999 4.79998V19.2C2.39999 19.5182 2.52642 19.8235 2.75147 20.0485C2.97651 20.2735 3.28173 20.4 3.59999 20.4C3.91825 20.4 4.22348 20.2735 4.44852 20.0485C4.67357 19.8235 4.79999 19.5182 4.79999 19.2V4.79998C4.79999 4.48172 4.67357 4.17649 4.44852 3.95145C4.22348 3.7264 3.91825 3.59998 3.59999 3.59998ZM15.9516 14.7516C15.733 14.9779 15.6121 15.281 15.6148 15.5957C15.6175 15.9103 15.7437 16.2113 15.9662 16.4338C16.1887 16.6562 16.4897 16.7825 16.8043 16.7852C17.1189 16.7879 17.4221 16.667 17.6484 16.4484L21.2484 12.8484C21.4734 12.6233 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L17.6484 7.55158C17.5377 7.43696 17.4053 7.34555 17.2589 7.28265C17.1125 7.21976 16.955 7.18666 16.7957 7.18528C16.6363 7.18389 16.4783 7.21425 16.3308 7.27459C16.1834 7.33493 16.0494 7.42403 15.9367 7.5367C15.824 7.64937 15.7349 7.78336 15.6746 7.93083C15.6143 8.07831 15.5839 8.23632 15.5853 8.39566C15.5867 8.55499 15.6198 8.71246 15.6827 8.85886C15.7456 9.00527 15.837 9.13768 15.9516 9.24838L17.5032 10.8H8.39999C8.08173 10.8 7.77651 10.9264 7.55147 11.1514C7.32642 11.3765 7.19999 11.6817 7.19999 12C7.19999 12.3182 7.32642 12.6235 7.55147 12.8485C7.77651 13.0735 8.08173 13.2 8.39999 13.2H17.5032L15.9516 14.7516Z"></path></svg>
		</div>
                <div className="trade-options-image-container">
                  <svg viewBox="0 0 24 24" width="auto" height="60" role="img" style={{fill: "rgba(70,70,70, 0.2)"}}><path d="M12.4275 2.8181C12.3747 2.75643 12.3092 2.70693 12.2354 2.67298C12.1617 2.63904 12.0814 2.62146 12.0002 2.62146C11.919 2.62146 11.8388 2.63904 11.7651 2.67298C11.6913 2.70693 11.6258 2.75643 11.573 2.8181C10.0889 4.55389 5.25 10.5548 5.25 15C5.25 19.1423 7.85812 21.75 12 21.75C16.1419 21.75 18.75 19.1423 18.75 15C18.75 10.5548 13.9111 4.55389 12.4275 2.8181V2.8181ZM12.75 19.3125C12.6599 19.3127 12.5711 19.2912 12.491 19.2499C12.4109 19.2087 12.3419 19.1487 12.2898 19.0752C12.2377 19.0017 12.2041 18.9168 12.1916 18.8276C12.1792 18.7383 12.1884 18.6474 12.2184 18.5625C12.2568 18.4517 12.3291 18.3557 12.4252 18.2884C12.5212 18.2211 12.636 18.1858 12.7533 18.1875C13.4978 18.1859 14.2114 17.8894 14.7379 17.3629C15.2644 16.8364 15.5609 16.1228 15.5625 15.3783C15.5608 15.261 15.5961 15.1462 15.6634 15.0501C15.7308 14.9541 15.8267 14.8818 15.9375 14.8434C16.0224 14.8134 16.1134 14.8042 16.2026 14.8166C16.2918 14.829 16.3768 14.8627 16.4503 14.9148C16.5238 14.9669 16.5837 15.0359 16.625 15.116C16.6663 15.1961 16.6877 15.2849 16.6875 15.375C16.6864 16.4189 16.2712 17.4198 15.533 18.158C14.7948 18.8962 13.7939 19.3114 12.75 19.3125Z"></path></svg>
		</div>
		<div className="trade-options-description-container">
                  <p className="trade-options-description">Add your XTZ & Tokens to Liquidity Pools</p>
		</div>
	      </Link>
	  </div>
	  </>
         )}
      </div>
  )
}
