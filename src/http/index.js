import axios from "axios";

const API_URL = "http://localhost:3000";
const axiosFetch = axios.create({
  baseURL: API_URL,
});

axiosFetch.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    JSON.parse(localStorage.getItem("userData")) &&
    JSON.parse(localStorage.getItem("userData")).accessToken
  }`;
  return config;
});

axiosFetch.interceptors.response.use((config) => {
  return config;
});

export default axiosFetch;
