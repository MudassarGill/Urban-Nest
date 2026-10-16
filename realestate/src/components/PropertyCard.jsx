import { Link } from "react-router";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import FavoriteButton from "./FavoriteButton";
import { formatPrice } from "../data/properties";

function PropertyCard({ property }) {
  const { id, title, price, type, city, area, beds, baths, sqft, image } = property;

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <Link to={`/properties/${id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
            {type}
          </span>
        </div>

        <div className="p-5">
          <p className="text-2xl font-bold text-golddark">{formatPrice(price)}</p>
          <h3 className="mt-1 font-heading text-xl font-bold transition-colors group-hover:text-golddark">
            {title}
          </h3>
          <p className="mb-4 mt-1 flex items-center gap-1 text-sm text-navy/70">
            <MapPin size={16} /> {area}, {city}
          </p>

          <div className="flex gap-5 border-t border-sand pt-4 text-sm">
            {beds > 0 && (
              <span className="flex items-center gap-1"><BedDouble size={18} /> {beds}</span>
            )}
            <span className="flex items-center gap-1"><Bath size={18} /> {baths}</span>
            <span className="flex items-center gap-1"><Ruler size={18} /> {sqft} sq ft</span>
          </div>
        </div>
      </Link>

      <FavoriteButton id={id} className="absolute right-4 top-4" />
    </article>
  );
}

export default PropertyCard;