import { eCommerceApi } from "../api/eCommerceApi";
export const userRoles = async (id) => {
  const res = await eCommerceApi.get(`/users/${id}/roles`);
  return res.data;
};
