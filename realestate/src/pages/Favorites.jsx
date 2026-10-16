import { Link } from "react-router";
import { Heart } from "lucide-react";
import PageBanner from "../components/PageBanner";
import PropertyCard from "../components/PropertyCard";
import EmptyState from "../components/EmptyState";
import { useFavorites } from "../context/FavoritesContext";
import { properties } from "../data/properties";

function Favorites() {
  const { favorites } = useFavorites();
  const saved = properties.filter((p) => favorites.includes(p.id));

  return (
    <>
      <PageBanner title="Your Favorites" subtitle="Properties you have saved." />

      <section className="mx-auto max-w-6xl px-6 py-12">
        {saved.length === 0 ? (
          <EmptyState
            icon={<Heart size={48} />}
            title="No favorites yet"
            text="Tap the heart on any property to save it here."
          >
            <Link to="/properties" className="inline-block rounded-full bg-navy px-8 py-3 font-bold text-white hover:bg-golddark">
              Browse Properties
            </Link>
          </EmptyState>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {saved.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Favorites;