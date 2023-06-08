import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://projetocaixaback-end-production.up.railway.app',
});

// Api.interceptors.request.use((config: any) => {
//   try {
//     return config;
//   } catch (error: any) {
//     console.error(error);
//   }
// });

export default Api;
