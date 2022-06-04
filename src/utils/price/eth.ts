import axios from 'axios';

export const ethPrice = async (): Promise<void> => {
const getEthPrice = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum?sparkline=true")
try {
  return getEthPrice.data;
} catch {
  return undefined;
}
}
