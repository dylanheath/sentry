import axios from 'axios';

export const Tzkt = async () =>  {
  const getTzkt = await axios.get("https://status.teztools.io/v1/tzkt.json"); 
  try {
    return getTzkt.data.indices[0];
  } catch {
    return undefined;
  }
}

export const Cen = async () =>  {
  const getCen = await axios.get("https://mainnet.cen.network/.netlify/functions/api/status"); 
  try {
    return getCen.data;
  } catch {
    return undefined;
  }
}

export const CoinGecko = async () =>  {
  const getCoinGecko = await axios.get("https://api.coingecko.com/api/v3/ping"); 
  try {
    return getCoinGecko.status;
  } catch {
    return undefined;
  }
}
