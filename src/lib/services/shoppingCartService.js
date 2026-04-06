import { eCommerceApi } from "../api/eCommerceApi";

export const getAddresses = async () => {
  const res = await eCommerceApi.get("/user/address");
  return res.data;
};

export const addAddresses = async (addressPayload) => {
  const res = await eCommerceApi.post("/user/address", addressPayload);
  return res.data;
};

export const updateAddresses = async (addressPayload) => {
  const res = await eCommerceApi.put(`/user/address`, addressPayload);
  return res.data;
};

export const deleteAddresses = async (addressId) => {
  const res = await eCommerceApi.delete(`/user/address/${addressId}`);
  return res.data;
};

export const getCards = async () => {
  const res = await eCommerceApi.get("/user/card");
  return res.data;
};

export const addCreditCards = async (cardPayload) => {
  const res = await eCommerceApi.post("/user/card", cardPayload);
  return res.data;
};

export const updateCreditCards = async (cardPayload) => {
  const res = await eCommerceApi.put(`/user/card`, cardPayload);
  return res.data;
};

export const deleteCreditCards = async (cardId) => {
  const res = await eCommerceApi.delete(`/user/card/${cardId}`);
  return res.data;
};
