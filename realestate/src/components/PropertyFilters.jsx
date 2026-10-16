import { propertyTypes, priceOptions } from "../data/properties";

const field =
  "rounded-xl border-2 border-sand bg-white px-3 py-2.5 outline-none focus:border-golddark";

function PropertyFilters({ values, onChange, onReset }) {
  return (
    <div className="mb-10 rounded-2xl bg-white p-5 shadow-lg shadow-navy/10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <label htmlFor="f-city" className="text-sm font-bold">Location</label>
          <input
            id="f-city"
            value={values.city}
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="City or area"
            className={field}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="f-type" className="text-sm font-bold">Type</label>
          <select id="f-type" value={values.type} onChange={(e) => onChange("type", e.target.value)} className={field}>
            <option value="">All types</option>
            {propertyTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="f-price" className="text-sm font-bold">Max price</label>
          <select id="f-price" value={values.maxPrice} onChange={(e) => onChange("maxPrice", e.target.value)} className={field}>
            {priceOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="f-beds" className="text-sm font-bold">Bedrooms</label>
          <select id="f-beds" value={values.beds} onChange={(e) => onChange("beds", e.target.value)} className={field}>
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="f-sort" className="text-sm font-bold">Sort by</label>
          <select id="f-sort" value={values.sort} onChange={(e) => onChange("sort", e.target.value)} className={field}>
            <option value="">Newest</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 cursor-pointer text-sm font-bold text-golddark underline"
      >
        Reset filters
      </button>
    </div>
  );
}

export default PropertyFilters;