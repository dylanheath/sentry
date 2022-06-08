import axios from 'axios';

export const busdPrice = async (): Promise<void> => {
const getBusdPrice = await axios.get("https://api.coingecko.com/api/v3/coins/binance-usd?sparkline=true")
try {
  return getBusdPrice.data;
} catch {
  return undefined;
}
}
