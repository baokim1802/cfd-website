import axios from "axios";
import { TOKEN_STORAGE_KEY } from "./key";

const api = axios.create({
  baseURL: import.meta.env.VITE_HOST,
});

api.interceptors.request.use((config) => {
  // console.log("middleware request", config);
  let token = localStorage.getItem(TOKEN_STORAGE_KEY);

  if (token) {
    token = JSON.parse(token);
    config.headers["Authorization"] = `Bearer ${token.accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => {
    // console.log("middleware response", res);
    return res.data;
  },
  async (error) => {
    console.log("Got error", error);
    return error.response.data;
  }
);

export default api;
