import axios from 'axios';

const fetcher = axios.create({
  baseURL: import.meta.env.IS_DEV
    ? import.meta.env.REMOTE_URL
    : 'http://localhost:8080',
});

export default fetcher;
