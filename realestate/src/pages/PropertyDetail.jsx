import { Link, useParams } from "react-router";
import { ArrowLeft, Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import FavoriteButton from "../components/FavoriteButton";
import PropertyCard from "../components/PropertyCard";
import { properties, formatPrice } from "../data/properties";
import { agents } from "../data/agents";

function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="mb-3 font-heading text-4xl font-bold">Property not found</h1>
        <p className="mb-8 text-lg">Sorry, we could not find this property.</p>
        <Link to="/properties" className="inline-block rounded-full bg-navy px-8 py-4 font-bold text-white hover:bg-golddark">
          Back to Properties
        </Link>
      </section>
    );
  }

  const agent = agents.find((a) => a.id === property.agentId);
  const related = properties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link to="/properties" className="mb-6 inline-flex items-center gap-1 font-medium text-golddark hover:underline">
          <ArrowLeft size={18} /> Back to properties
        </Link>

        <img
          src={property.image}
          alt={property.title}
          className="h-80 w-full rounded-3xl object-cover shadow-xl shadow-navy/20 md:h-[480px]"
        />

        <div className="mt-8 flex flex-col gap-10 lg:flex-row">
          <div className="flex-1">
            <span className="rounded-full bg-navy px-3 py-1 text-xs font-bold text-white">
              {property.type}
            </span>
            <h1 className="mt-3 font-heading text-4xl font-bold">{property.title}</h1>
            <p className="mt-2 flex items-center gap-1 text-navy/70">
              <MapPin size={18} /> {property.area}, {property.city}
            </p>
            <p className="mt-4 text-3xl font-bold text-golddark">{formatPrice(property.price)}</p>

            <div className="my-6 flex flex-wrap gap-8 border-y border-sand py-5">
              {property.beds > 0 && (
                <span className="flex items-center gap-2"><BedDouble /> {property.beds} Beds</span>
              )}
              <span className="flex items-center gap-2"><Bath /> {property.baths} Baths</span>
              <span className="flex items-center gap-2"><Ruler /> {property.sqft} sq ft</span>
            </div>

            <h2 className="mb-2 font-heading text-2xl font-bold">About this property</h2>
            <p className="text-lg">{property.description}</p>
          </div>

          <aside className="h-fit rounded-2xl bg-sand p-6 lg:w-80">
            <h2 className="mb-4 font-heading text-xl font-bold">Listing agent</h2>
            <div className="mb-4 flex items-center gap-4">
              <img src={agent.image} alt={agent.name} className="h-16 w-16 rounded-full object-cover" />
              <div>
                <p className="font-bold">{agent.name}</p>
                <p className="text-sm text-golddark">{agent.role}</p>
              </div>
            </div>
            <p className="text-sm">{agent.phone}</p>
            <p className="mb-5 text-sm">{agent.email}</p>

            <Link to="/contact" className="mb-3 block rounded-full bg-navy px-6 py-3 text-center font-bold text-white hover:bg-golddark">
              Contact Agent
            </Link>
            <div className="flex items-center justify-center gap-2 text-sm font-medium">
              <FavoriteButton id={property.id} /> Save to favorites
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <h2 className="mb-6 font-heading text-3xl font-bold">Similar properties</h2>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default PropertyDetail;