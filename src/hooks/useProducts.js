import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../lib/services/productService";
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
