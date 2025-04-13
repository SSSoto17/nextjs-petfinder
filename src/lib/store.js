import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useFilterStore = create((set) => ({
  activeFilter: "All",
  actions: {
    setFilter: (newFilter) =>
      set(() => ({
        activeFilter: newFilter,
      })),
  },
}));

export const useFilter = () => useFilterStore((state) => state.activeFilter);
export const useFilterActions = () => useFilterStore((state) => state.actions);

const useFavoritesStore = create(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (pet) =>
        set((state) => ({
          favorites: [...state.favorites, pet],
        })),
      removeFromFavorites: (petID) =>
        set((state) => ({
          favorites: state.favorites.filter((pet) => pet.id !== petID),
        })),
    }),
    {
      name: "favorites-storage",
    }
  )
);

export const useFavorites = () => useFavoritesStore((state) => state.favorites);
export const useAddFavorite = () =>
  useFavoritesStore((state) => state.addToFavorites);
export const useRemoveFavorite = () =>
  useFavoritesStore((state) => state.removeFromFavorites);
