import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

function getSaved() {
  try {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(getSaved);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}