import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const favoriteStore = create(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (car) =>
        set((state) => {
          if (!state.favorites.some((fav) => fav.id === car.id)) {
            return { favorites: [...state.favorites, car] };
          }
          return state;
        }),
      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== id),
        })),
    }),
    {
      name: 'favorites-storage',
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    }
  )
);

export default favoriteStore; // Default export qo'shildi