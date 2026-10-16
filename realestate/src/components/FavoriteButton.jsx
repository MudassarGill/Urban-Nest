import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

function FavoriteButton({ id, className = "" }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(id);

  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={active}
      className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gold ${className}`}
    >
      <Heart size={20} className={active ? "fill-red-500 text-red-500" : "text-navy"} />
    </button>
  );
}

export default FavoriteButton;