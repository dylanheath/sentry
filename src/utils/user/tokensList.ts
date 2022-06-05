import axios from 'axios';

export const tokensList = async (): Promise<void> =>  {
  const getTokensList = await axios.get("https://api.teztools.io/token/prices", {timeout: 4000}); 
  try {
    return getTokensList.data.contracts;
  } catch {
    return undefined;
  }
}


