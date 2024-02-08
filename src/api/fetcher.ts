import axios from 'axios';

const fetcher = axios.create({
  baseURL: !import.meta.env.DEV
    ? 'https://park-api.up.railway.app'
    : 'http://localhost:8080',
  headers: {
    Accept: '*/*',
  },
});

export default fetcher;
