import axios from "axios";

const eCommerceApi = axios.create({
  baseURL: import.meta.env.VITE_E_COMMERCE_API || "http://localhost:5173/",
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
