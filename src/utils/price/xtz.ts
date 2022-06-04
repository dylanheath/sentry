import axios from 'axios';

export const xtzPrice = async (): Promise<void> => {
  const getXtzPrice = await axios.get(`https://mainnet.cen.network/.netlify/functions/api/price/xtz`)
  try {
    return getXtzPrice.data
  } catch {
    return undefined;
  }
}

export const xtzSparkline = async (): Promise<void> => {
  const getXtzSparkline = await axios.get("https://api.coingecko.com/api/v3/coins/tezos?sparkline=true")
  try {
    return getXtzSparkline.data;
  } catch {
    return undefined;
  }
}
