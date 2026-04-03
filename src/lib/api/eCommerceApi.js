import axios from "axios";

const eCommerceApi = axios.create({
  baseURL: import.meta.env.VITE_E_COMMERCE_API_URL || "http://localhost:5173/",
  headers: {
    "Content-Type": "application/json",
  },
});

// eCommerceApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export { eCommerceApi };
