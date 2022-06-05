import axios from 'axios';

export const farms = async (address:string): Promise<void> =>  {
  const getFarms = await axios.get(`https://api.tzkt.io/v1/tokens/balances?account=${address}&balance.gt=1`, {timeout: 4000}); 
  try {
    return getFarms.data;
  } catch {
    return undefined;
  }
}
