import { create } from "zustand";

interface CategoriesState {
  categorie: string;
  setNewCategory: (newCategory: string) => void;
}

export const useCategories = create<CategoriesState>((set) => ({
  categorie: "Todos",
  setNewCategory: (newCategory: string) =>
    set(() => ({
      categorie: newCategory,
    })),
}));