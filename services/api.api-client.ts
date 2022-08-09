import axios from "axios";

const ApiClient = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

export { ApiClient };
