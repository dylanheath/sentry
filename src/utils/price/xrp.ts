import axios from 'axios';

export const xrpPrice = async (): Promise<void> => {
const getXrpPrice = await axios.get("https://api.coingecko.com/api/v3/coins/ripple?sparkline=true")
try {
  return getXrpPrice.data;
} catch {
  return undefined;
}
}
