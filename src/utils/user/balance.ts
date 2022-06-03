import axios from 'axios';

export default async function balance(address:any) {
  const getBalance = await axios.get(`https://api.tzkt.io/v1/accounts/${address}/balance`) 
    .then((response) => {
      return {balance: response.data, error: false}
    })
    .catch((error) => {
      return {balance: 0, error: true }
    })
}


