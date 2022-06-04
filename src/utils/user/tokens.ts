import axios from 'axios';

export const tokens = async (address:string): Promise<void> =>  {
  const getTokens = await axios.get(`https://api.tzkt.io/v1/accounts/${address}/balance`, {timeout: 4000}); 
  try {
    return getTokens.data;
  } catch {
    return undefined;
  }
}

