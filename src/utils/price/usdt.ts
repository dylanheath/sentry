import axios from 'axios';

export const UsdtPrice = async (): Promise<void> => {
const getUsdtPrice = await axios.get("https://api.coingecko.com/api/v3/coins/tether?sparkline=true")
try {
  return getUsdtPrice.data;
} catch {
  return undefined;
}
}
