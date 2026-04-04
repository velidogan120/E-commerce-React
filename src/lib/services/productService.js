import { eCommerceApi } from "../api/eCommerceApi";
export const getCategories = async () => {
  const res = await eCommerceApi.get("/categories");
  return res.data;
};

export const getProducts = async ({
  categoryId,
  filter,
  limit,
  offset,
  sort,
} = {}) => {
  const params = new URLSearchParams();

  if (categoryId) {
    params.append("category", categoryId);
  }

  if (filter) {
    params.append("filter", filter);
  }

  if (limit) {
    params.append("limit", limit);
  }

  if (offset) {
    params.append("offset", offset);
  }

  if (sort) {
    params.append("sort", sort);
  }

  const res = await eCommerceApi.get("/products", { params });
  return res.data;
};

export const getProductById = async (id) => {
  const res = await eCommerceApi.get(`/products/${id}`);
  return res.data;
};
