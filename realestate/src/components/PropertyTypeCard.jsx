import { Link } from "react-router";

function PropertyTypeCard({ image, label, type }) {
  return (
    <Link
      to={`/properties?type=${type}`}
      className="group relative block h-60 overflow-hidden rounded-2xl"
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-navy/40 transition-colors group-hover:bg-navy/20" />
      <span className="absolute bottom-4 left-5 font-heading text-2xl font-bold text-white">
        {label}
      </span>
    </Link>
  );
}

export default PropertyTypeCard;