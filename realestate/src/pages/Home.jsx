import { Link } from "react-router";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import PropertyTypeCard from "../components/PropertyTypeCard";
import PropertyCard from "../components/PropertyCard";
import FeatureItem from "../components/FeatureItem";
import AgentCard from "../components/AgentCard";
import CallToAction from "../components/CallToAction";
import { properties } from "../data/properties";
import { agents } from "../data/agents";
import houseImg from "../assets/images/type-house.jpg";
import apartmentImg from "../assets/images/type-apartment.jpg";
import villaImg from "../assets/images/type-villa.jpg";
import commercialImg from "../assets/images/type-commercial.jpg";

function Home() {
  const featured = properties.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-8 pt-20">
        <SectionHeading title="Browse by type" subtitle="Start with what you are looking for." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <PropertyTypeCard image={houseImg} label="Houses" type="House" />
          <PropertyTypeCard image={apartmentImg} label="Apartments" type="Apartment" />
          <PropertyTypeCard image={villaImg} label="Villas" type="Villa" />
          <PropertyTypeCard image={commercialImg} label="Commercial" type="Commercial" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="Featured properties" subtitle="Hand-picked listings this week." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/properties" className="font-bold text-golddark hover:underline">
            View all properties
          </Link>
        </div>
      </section>

      <section className="bg-navy px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading light title="Why choose Urban Nest" subtitle="Buying or renting should feel simple." />
          <div className="grid gap-10 md:grid-cols-3">
            <FeatureItem number="01" title="Verified listings" text="Every property is checked before it goes live." />
            <FeatureItem number="02" title="Trusted agents" text="Talk to local experts who know the area well." />
            <FeatureItem number="03" title="Clear details" text="Photos, prices and features shown up front." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading title="Meet our agents" subtitle="People who will help you find the right place." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default Home;