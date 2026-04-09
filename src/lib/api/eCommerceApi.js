import axios from "axios";

const baseURL = import.meta.env.DEV
  ? "/api"
  : import.meta.env.VITE_E_COMMERCE_API ||
    "https://workintech-fe-ecommerce.onrender.com";

const eCommerceApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

eCommerceApi.interceptors.request.use((config) => {
  const localToken = localStorage.getItem("token");
  const sessionToken = sessionStorage.getItem("token");

  if (localToken || sessionToken) {
    config.headers.Authorization = `${localToken ? localToken : sessionToken}`;
  }

  return config;
});

export { eCommerceApi };
