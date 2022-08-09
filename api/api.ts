import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const api = axios.create({
  baseURL: `${process.env.P100_ADMIN_API_URL}/api`,
  withCredentials: true
});
