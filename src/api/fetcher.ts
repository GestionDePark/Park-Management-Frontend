<<<<<<< HEAD
import axios from 'axios';

const fetcher = axios.create({
  baseURL: !import.meta.env.IS_DEV
    ? 'https://park-api.up.railway.app'
    : 'http://localhost:8080',
  headers: {
    Accept: '*/*',
  },
});

export default fetcher;
=======
import axios from 'axios';

const fetcher = axios.create({
  baseURL: !import.meta.env.IS_DEV
    ? 'https://park-api.up.railway.app'
    : 'http://localhost:8080',
  headers: {
    Accept: '*/*',
  },
});

export default fetcher;
>>>>>>> 384ffe9 (style: reformat)
