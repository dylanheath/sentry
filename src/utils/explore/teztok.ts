import axios from 'axios';

export const Teztok = async (): Promise<void> => {
const getTeztok = await axios.get("https://livefeed-proxy.teztok.com/feed")
try {
  return getTeztok.data.events;
} catch {
  return undefined;
}
}
