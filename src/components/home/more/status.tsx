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
	     <div className="more-component-status-icon-container">
	       <p>{tzktStatus}</p>
	       <svg viewBox="0 0 24 24" width="14" height="14" style={tzktStatus !== "online" ? {fill: "#b34714"} : {fill: "#294a3b"}} role="img"><path d="M12 21.5999C14.5461 21.5999 16.9879 20.5885 18.7882 18.7881C20.5886 16.9878 21.6 14.546 21.6 11.9999C21.6 9.45382 20.5886 7.01203 18.7882 5.21168C16.9879 3.41133 14.5461 2.3999 12 2.3999C9.45391 2.3999 7.01212 3.41133 5.21177 5.21168C3.41142 7.01203 2.39999 9.45382 2.39999 11.9999C2.39999 14.546 3.41142 16.9878 5.21177 18.7881C7.01212 20.5885 9.45391 21.5999 12 21.5999ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"></path></svg>
	     </div>
	   </div>
	   <div className="more-component-status-divider-container">
             <div className="more-component-status-divider"></div> 
	   </div>
           <div className="more-component-status-wrapper">
             <p className="more-component-status-tag">Cen</p> 
	     <div className="more-component-status-icon-container">
	       <p>{cenStatus}</p>
	       <svg viewBox="0 0 24 24" width="14" height="14" role="img" style={cenStatus !== "online" ? {fill: "#b34714"} : {fill: "#294a3b"}}><path d="M12 21.5999C14.5461 21.5999 16.9879 20.5885 18.7882 18.7881C20.5886 16.9878 21.6 14.546 21.6 11.9999C21.6 9.45382 20.5886 7.01203 18.7882 5.21168C16.9879 3.41133 14.5461 2.3999 12 2.3999C9.45391 2.3999 7.01212 3.41133 5.21177 5.21168C3.41142 7.01203 2.39999 9.45382 2.39999 11.9999C2.39999 14.546 3.41142 16.9878 5.21177 18.7881C7.01212 20.5885 9.45391 21.5999 12 21.5999ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"></path></svg>
	     </div>
	   </div>
           <div className="more-component-status-divider-container">
             <div className="more-component-status-divider"></div> 
	   </div>
           <div className="more-component-status-wrapper">
             <p className="more-component-status-tag">CoinGecko</p> 
	     <div className="more-component-status-icon-container">
	       <p>{coinGeckoStatus}</p>
	       <svg viewBox="0 0 24 24" width="14" height="14" role="img" style={coinGeckoStatus !== "online" ? {fill: "#b34714"} : {fill: "#294a3b"}}><path d="M12 21.5999C14.5461 21.5999 16.9879 20.5885 18.7882 18.7881C20.5886 16.9878 21.6 14.546 21.6 11.9999C21.6 9.45382 20.5886 7.01203 18.7882 5.21168C16.9879 3.41133 14.5461 2.3999 12 2.3999C9.45391 2.3999 7.01212 3.41133 5.21177 5.21168C3.41142 7.01203 2.39999 9.45382 2.39999 11.9999C2.39999 14.546 3.41142 16.9878 5.21177 18.7881C7.01212 20.5885 9.45391 21.5999 12 21.5999ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"></path></svg>
	     </div>
	   </div>
	</div>
      </div>
      </div>
      </div>
    </div>
  )
}
