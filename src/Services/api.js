import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3033",
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
