import axios from 'axios';

export const  balance = async (address:string): Promise<void> =>  {
  const getBalance = await axios.get(`https://api.tzkt.io/v1/accounts/${address}/balance`); 
  try {
    return getBalance.data;
  } catch {
    return undefined;
  }
}

export const balanceGraph = async (address:string): Promise<void> => {
  let balanceData: Array<number> = [];
  const getBalanceGraph = await axios.get(`https://api.tzkt.io/v1/accounts/${address}/balance_history`)
  try {
    return getBalanceGraph.data
  } catch {
    return undefined;
  }
}
