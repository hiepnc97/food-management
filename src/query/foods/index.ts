import { getCategories, getFoods } from "@/services/foods";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () =>
  useQuery({ queryKey: ["categories"], queryFn: () => getCategories() });

export const useFoods = () =>
  useQuery({ queryKey: ["foods"], queryFn: () => getFoods() });
