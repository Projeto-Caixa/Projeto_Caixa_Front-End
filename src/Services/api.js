import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://projetocaixaback-end-production.up.railway.app/',
});

Api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.error(error);
  }
});

export default Api;
