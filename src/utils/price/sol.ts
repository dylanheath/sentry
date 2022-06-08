import axios from 'axios';

export const solPrice = async (): Promise<void> => {
const getSolPrice = await axios.get("https://api.coingecko.com/api/v3/coins/solana?sparkline=true")
try {
  return getSolPrice.data;
} catch {
  return undefined;
}
}
