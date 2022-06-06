import axios from 'axios';

export const repoReleases = async () => {
const getRelease = await axios.get("https://api.github.com/repos/dylanheath/sentry/releases")
try {
  return getRelease.data[0];
} catch {
  return undefined;
}
}
