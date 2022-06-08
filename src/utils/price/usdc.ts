import axios from 'axios';

export const usdcPrice = async (): Promise<void> => {
const getUsdcPrice = await axios.get("https://api.coingecko.com/api/v3/coins/usd-coin?sparkline=true")
try {
  return getUsdcPrice.data;
} catch {
  return undefined;
}
}
