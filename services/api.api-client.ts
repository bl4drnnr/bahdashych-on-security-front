import axios from "axios";
import dotenv from "dotenv";
dotenv.config()

const ApiClient = axios.create({
  baseURL: process.env.FRONT_API_URL,
  withCredentials: true,
});

export { ApiClient };
