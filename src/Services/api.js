import axios from "axios";

const Api = axios.create({
  baseURL: "http://35.247.237.135:3033",
});

Api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.error(error);
  }
});

export default Api;
