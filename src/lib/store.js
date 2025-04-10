import { create } from "zustand";

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

const useFavoritesStore = create((set) => ({
  favorites: [],
  actions: {
    addToFavorites: (pet) =>
      set((state) => ({
        favorites: [...state.favorites, pet],
      })),
    removeFromFavorites: (petID) =>
      set((state) => ({
        favorites: state.favorites.filter((pet) => pet.id !== petID),
      })),
  },
}));

export const useFavorites = () => useFavoritesStore((state) => state.favorites);
export const useFavoriteActions = () =>
  useFavoritesStore((state) => state.actions);
