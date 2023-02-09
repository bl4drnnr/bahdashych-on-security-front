import axios from 'axios';

const ApiClient = axios.create({
  baseURL: process.env.FRONT_API_URL,
  withCredentials: true,
});

export { ApiClient };
