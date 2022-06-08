import axios from 'axios';

export const dogePrice = async (): Promise<void> => {
const getDogePrice = await axios.get("https://api.coingecko.com/api/v3/coins/dogecoin?sparkline=true")
try {
  return getDogePrice.data;
} catch {
  return undefined;
}
}
