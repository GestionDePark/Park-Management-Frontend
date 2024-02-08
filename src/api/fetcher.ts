import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://park-api.up.railway.app',
  headers: {
    Accept: '*/*',
  },
});

export default fetcher;
