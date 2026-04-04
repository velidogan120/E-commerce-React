import { eCommerceApi } from "../api/eCommerceApi";
export const getCategories = async () => {
  const res = await eCommerceApi.get("/categories");
  return res.data;
};
