import { useQuery } from "@tanstack/react-query";
import {
  getCategories,
  getProductById,
  getProducts,
} from "../lib/services/productService";
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
  });
};

export const useProducts = (params = {}) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: getProducts(params),
    refetchOnWindowFocus: false,
  });
};

export const useProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: getProductById(id),
    refetchOnWindowFocus: false,
  });
};
