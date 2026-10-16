import { useState } from "react";
import { useNavigate } from "react-router";
import { propertyTypes, priceOptions } from "../data/properties";

const field =
  "rounded-xl border-2 border-sand bg-white px-3 py-3 text-navy outline-none focus:border-golddark";

function SearchBar() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city.trim()) params.set("city", city.trim());
    if (type) params.set("type", type);
    if (maxPrice) params.set("maxPrice", maxPrice);
    navigate(`/properties?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-4xl flex-wrap items-end gap-4 rounded-2xl bg-white p-5 text-navy"
    >
      <div className="flex min-w-[180px] flex-1 flex-col gap-1">
        <label htmlFor="search-city" className="text-sm font-bold">
          Location
        </label>
        <input
          id="search-city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City or area"
          className={field}
        />
      </div>

      <div className="flex min-w-[150px] flex-1 flex-col gap-1">
        <label htmlFor="search-type" className="text-sm font-bold">
          Type
        </label>
        <select
          id="search-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={field}
        >
          <option value="">All types</option>
          {propertyTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex min-w-[150px] flex-1 flex-col gap-1">
        <label htmlFor="search-price" className="text-sm font-bold">
          Max price
        </label>
        <select
          id="search-price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className={field}
        >
          {priceOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="cursor-pointer rounded-xl bg-navy px-8 py-3.5 font-bold text-white hover:bg-golddark"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;