import axios from 'axios';

export const tezosPrices = async (): Promise<void> => {
const getTezosPrices = await axios.get("https://api.teztools.io/v1/prices")
try {
  return getTezosPrices.data;
} catch {
  return undefined;
}
}
