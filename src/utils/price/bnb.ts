import axios from 'axios';

export const bnbPrice = async (): Promise<void> => {
const getBnbPrice = await axios.get("https://api.coingecko.com/api/v3/coins/binancecoin?sparkline=true")
try {
  return getBnbPrice.data;
} catch {
  return undefined;
}
}
