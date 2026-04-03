import { eCommerceApi } from "../api/eCommerceApi";
export const signup = async (data) => {
  const res = await eCommerceApi.post("/signup", data);
  return res.data;
};

export const login = async (data) => {
  const res = await eCommerceApi.post("/login", data);
  return res.data;
};

export const roles = async () => {
  const res = await eCommerceApi.get("/roles");
  return res.data;
};
