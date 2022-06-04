import axios from 'axios';

export const btcPrice = async (): Promise<void> => {
const getEthPrice = await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin?sparkline=true")
try {
  return getEthPrice.data;
} catch {
  return undefined;
}
}









