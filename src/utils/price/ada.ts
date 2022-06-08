import axios from 'axios';

export const adaPrice = async (): Promise<void> => {
const getAdaPrice = await axios.get("https://api.coingecko.com/api/v3/coins/cardano?sparkline=true")
try {
  return getAdaPrice.data;
} catch {
  return undefined;
}
}
