import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3033",
});

// Api.interceptors.request.use((config: any) => {
//   try {
//     return config;
//   } catch (error: any) {
//     console.error(error);
//   }
// });

export default Api;
