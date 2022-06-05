import axios from 'axios';

export const tokens = async (address:string)  =>  {
  const getTokens = await axios.get(`https://api.tzkt.io/v1/tokens/balances?account=${address}&balance.gt=1`, {timeout: 4000}); 
  const getTokensList = await axios.get("https://api.teztools.io/token/prices", {timeout: 4000});
  try {
    const groupedTokens = {tokens: getTokens.data, list: getTokensList.data}
    return groupedTokens
  } catch {
    return undefined;
  }
}

