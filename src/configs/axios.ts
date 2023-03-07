import { Localstorage } from "@utils/localstorage"
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const axiosApiInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosApiInstance.defaults.headers.common["Content-Type"] = "application/json";

axiosApiInstance.interceptors.request.use(
  (config) => {
    const token = Localstorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosApiInstance;
