import React, {useState, useEffect} from 'react';

// styling
import './more.css';

// utils
import { Tzkt } from '../../../utils/status/status';
import { Cen } from '../../../utils/status/status';
import { CoinGecko } from '../../../utils/status/status';

type statusObject = {
  status: string,
}

export default function Status() {
  const [tzktStatus, setTzktStatus] = useState<string>("online");
  const [cenStatus, setCenStatus] = useState<string>("online");
  const [coinGeckoStatus, setCoinGeckoStatus] = useState<string>("online");

  useEffect(() => {
    const checkStatus = async () => {
      const getTzkt = await Tzkt()
       .then((result) => {
         setTzktStatus(result.status); 
       })
       .catch(() => {
         console.log("failed to get status");
       })
       const getCen = await Cen()
         .then((result) => {
           setCenStatus(result.status);
         })
	 .catch(() => {
           console.log("failed to get status");
	 })
       const getCoinGecko = await Cen()
         .then((result) => {
           setCoinGeckoStatus(result.status);
         })
	 .catch(() => {
           console.log("failed to get status");
	 })
    }
    checkStatus();
    setInterval(function(){
        checkStatus();
      },60 * 1000);
  }, [])
  return (
    <div className="more-component">
      <div className="more-component-header-container">
         <p className="more-component-header">Status</p>
	 <a className="more-component-header-real-time-tag">
	   <p className="more-component-real-time">Real-Time</p>
	   <div className="more-component-header-real-time-divider"></div>
	   <svg viewBox="0 0 24 24" width="20" height="20" role="img" style={{fill: "rgb(70, 70, 70)"}}><path d="M 21.6 12 C 21.6 17.302 17.302 21.6 12 21.6 C 6.698 21.6 2.4 17.302 2.4 12 C 2.4 6.698 6.698 2.4 12 2.4 C 17.302 2.4 21.6 6.698 21.6 12 Z M 12 6 C 11.337 6 10.8 6.537 10.8 7.2 C 10.8 7.863 11.337 8.4 12 8.4 C 12.663 8.4 13.2 7.863 13.2 7.2 C 13.2 6.537 12.663 6 12 6 Z M 10.8 10.8 C 10.137 10.8 9.6 11.337 9.6 12 C 9.6 12.663 10.137 13.2 10.8 13.2 L 10.8 16.8 C 10.8 17.463 11.337 18 12 18 L 13.2 18 C 13.863 18 14.4 17.463 14.4 16.8 C 14.4 16.137 13.863 15.6 13.2 15.6 L 13.2 12 C 13.2 11.337 12.663 10.8 12 10.8 Z"></path></svg>
	 </a>
      </div>
      <div className="more-component-status-list-container">
      <div className="more-component-status-container">
        <div className="more-component-status-box">
           <div className="more-component-status-wrapper">
             <p className="more-component-status-tag">Services</p> 
	     <p className="more-component-status_tag">{ cenStatus !== "online" || tzktStatus !== "online" || coinGeckoStatus !== "online" ? "Some Services Offline" : "Online & Operational"}</p>
             <div className="more-component-update-status-wrapper">
               <div className="more-component-update-status"></div>
	     </div>
	   </div>
	</div>
      </div>
      <div className="more-component-status-operations-container">
      <div className="more-component-status-container">
        <div className="more-component-status-box">
           <div className="more-component-status-wrapper">
             <p className="more-component-status-tag">TZKT</p> 
	     <p>{tzktStatus}</p>
	   </div>
	   <div className="more-component-status-divider-container">
             <div className="more-component-status-divider"></div> 
	   </div>
           <div className="more-component-status-wrapper">
             <p className="more-component-status-tag">Cen</p> 
	     <p>{cenStatus}</p>
	   </div>
           <div className="more-component-status-divider-container">
             <div className="more-component-status-divider"></div> 
	   </div>
           <div className="more-component-status-wrapper">
             <p className="more-component-status-tag">CoinGecko</p> 
	     <p>{coinGeckoStatus}</p>
	   </div>
	</div>
      </div>
      </div>
      </div>
    </div>
  )
}
