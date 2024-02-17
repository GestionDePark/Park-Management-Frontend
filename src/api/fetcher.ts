import axios from 'axios';

const fetcher = axios.create({
  baseURL:
    !import.meta.env.DEV || import.meta.env.VITE_USE_REMOTE
      ? 'https://park-api.up.railway.app'
      : 'http://localhost:8080',
  headers: {
    Accept: '*/*',
  },
});

export default fetcher;
