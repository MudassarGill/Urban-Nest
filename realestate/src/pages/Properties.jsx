import { useSearchParams } from "react-router";
import { SearchX } from "lucide-react";
import PageBanner from "../components/PageBanner";
import PropertyFilters from "../components/PropertyFilters";
import PropertyCard from "../components/PropertyCard";
import EmptyState from "../components/EmptyState";
import { properties } from "../data/properties";

function Properties() {
  const [searchParams, setSearchParams] = useSearchParams();

  const values = {
    city: searchParams.get("city") || "",
    type: searchParams.get("type") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    beds: searchParams.get("beds") || "",
    sort: searchParams.get("sort") || "",
  };

  function updateParam(name, value) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(name, value);
    else next.delete(name);
    setSearchParams(next, { replace: true });
  }

  function resetFilters() {
    setSearchParams({});
  }

  const search = values.city.toLowerCase();

  const filtered = properties.filter(
    (p) =>
      (!search ||
        p.city.toLowerCase().includes(search) ||
        p.area.toLowerCase().includes(search)) &&
      (!values.type || p.type === values.type) &&
      (!values.maxPrice || p.price <= Number(values.maxPrice)) &&
      (!values.beds || p.beds >= Number(values.beds))
  );

  if (values.sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  if (values.sort === "price-high") filtered.sort((a, b) => b.price - a.price);

  return (
    <>
      <PageBanner title="Properties" subtitle="Find the place that suits you." />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <PropertyFilters values={values} onChange={updateParam} onReset={resetFilters} />

        <p className="mb-6 font-medium">
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
        </p>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<SearchX size={48} />}
            title="No properties found"
            text="Try changing or clearing your filters."
          >
            <button
              onClick={resetFilters}
              className="cursor-pointer rounded-3xl bg-navy px-8 py-3 font-bold text-white hover:bg-golddark"
            >
              Reset filters
            </button>
          </EmptyState>
        ) : (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Properties;