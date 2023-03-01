import axios from "axios";

const baseURL = process.env.BASE_URL;
const axiosApiInstance = axios.create({
  baseURL,
});

axiosApiInstance.defaults.headers.common["Content-Type"] = "application/json";

axiosApiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("error",error)
    return Promise.reject(error);
  }
);
