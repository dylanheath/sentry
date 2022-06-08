import axios from 'axios';

export const Price = async (id: string | undefined): Promise<void> => {
const getPrice = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`)
try {
  return getPrice.data;
} catch {
  return undefined;
}
}
