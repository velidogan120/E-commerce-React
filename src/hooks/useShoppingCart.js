import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addAddresses,
  addCreditCards,
  deleteAddresses,
  deleteCreditCards,
  getAddresses,
  getCards,
  updateAddresses,
  updateCreditCards,
} from "../lib/services/shoppingCartService";

const addressQueryKey = ["user/address"];
const cardQueryKey = ["user/card"];

export const useAddresses = () => {
  return useQuery({
    queryKey: addressQueryKey,
    queryFn: getAddresses,
    refetchOnWindowFocus: false,
  });
};

export const useAddAddresses = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addAddresses,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressQueryKey });
    },
  });
};

export const useUpdateAddresses = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAddresses,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressQueryKey });
    },
  });
};

export const useDeleteAddresses = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAddresses,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: addressQueryKey });
    },
  });
};

export const useCreditCards = () => {
  return useQuery({
    queryKey: cardQueryKey,
    queryFn: getCards,
    refetchOnWindowFocus: false,
  });
};

export const useAddCreditCards = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addCreditCards,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cardQueryKey });
    },
  });
};

export const useUpdateCreditCards = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCreditCards,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cardQueryKey });
    },
  });
};

export const useDeleteCreditCards = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCreditCards,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cardQueryKey });
    },
  });
};
