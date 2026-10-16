import heroVideo from "../assets/videos/hero.mp4";
import heroPoster from "../assets/images/hero-poster.jpg";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <header className="relative flex min-h-[700px] items-center overflow-hidden bg-navy text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
        <p className="mb-3 text-sm font-bold tracking-[3px] text-gold">FIND YOUR PLACE</p>
        <h1 className="mb-5 max-w-2xl font-heading text-4xl font-bold leading-tight md:text-6xl">
          Find a home that fits your life.
        </h1>
        <p className="mb-10 max-w-lg text-lg text-white/90">
          Browse houses, apartments and plots from trusted agents, all in one place.
        </p>
        <SearchBar />
      </div>
    </header>
  );
}

export default Hero;