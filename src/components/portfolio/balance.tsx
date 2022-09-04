import React, {useEffect, useState} from 'react';

// styling
import './portfolio.css';

// utils
import { xtzPrice } from '../../utils/price/xtz';
import { balance, balanceGraph} from '../../utils/user/balance';

// wallet
import { connectWallet, getActiveAccount, getAddress } from '../../utils/wallet/wallet';

export default function Balance() {
  const [balanceXTZ, setBalanceXTZ] = useState<number>(0);
  const [balanceGraphData, setBalanceGraphData] = useState<Array<number>>([1,1,1,1,1,1,1,1,1]);
  const [balanceCurrency, setBalanceCurrency] = useState<number>(0);
  const [graphStatus, setGraphStatus] = useState<boolean>(false);
  const [balanceUpdate, setBalanceUpdate] = useState<boolean>(false);
  const [balanceGraphUpdate, setBalanceGraphUpdate] = useState<boolean>(false);
  useEffect(() => {
    const getPrice = async () => {
      const price = await xtzPrice() 
        .then((result:any) => {
          setBalanceCurrency(result[0].Price); 
        })
	.catch(() => {
          console.log("failed to get price");
	})
     }
    const getBalance = async () => {
     const activeAccount = await getActiveAccount();
     let myAddress: String | undefined;
     let balanceGraphArray: Array<number> = [];
      if (activeAccount) {
        const address = await getAddress();
        const balanceRequest = await balance(address)
	.then((result:any) => {
          setBalanceXTZ(result / 1000000);
	})
	.catch(() => {
           console.log("failed to get balance");
	})
	const balanceGraphRequest = await balanceGraph(address)
	  .then((result:any) => {
	    result.map((balance:any) => {
              balanceGraphArray.push(balance.balance / 1000000);
	    })
            setBalanceGraphData(balanceGraphArray);
	    setGraphStatus(false);
	  })
	  .catch(() => {
            console.log("failed to get graph data");
	  })
      }
    }
    getPrice();
    getBalance();
    setInterval(function(){
        getPrice();
	getBalance();
      },60 * 1000);
  }, [])
  return (
    <div className="Balance-component">
      <div className="balance-container">
        <div className="balance-wrapper">
	  <div className="balance-row-container">
	    <div className="balance-data-container">
              <p className="balance" key={balanceXTZ}>{balanceXTZ}</p>
	      <p className="balance-change">0%</p>
	    </div>
	    <div className="balance-time-option">

	    </div>
	  </div>
	  <div className="balance-update-container">

	  </div>
	</div>
      </div> 
    </div>
  )
}
