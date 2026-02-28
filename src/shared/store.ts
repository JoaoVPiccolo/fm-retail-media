import { create } from "zustand";

interface CategoriesState {
  categorie: string;
  setNewCategory: (newCategory: string) => void;
}

export const useCategories = create<CategoriesState>((set) => ({
  categorie: "digital_signage",
  setNewCategory: (newCategory: string) =>
    set(() => ({
      categorie: newCategory,
    })),
}));
