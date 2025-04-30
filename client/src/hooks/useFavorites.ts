import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("recipeFavorites");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Failed to parse favorites from localStorage:", error);
        // Reset favorites if there's an error
        localStorage.removeItem("recipeFavorites");
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("recipeFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (id: string) => {
    if (!favorites.includes(id)) {
      setFavorites(prev => [...prev, id]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(favId => favId !== id));
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const isFavorite = (id: string): boolean => {
    return favorites.includes(id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite
  };
};
