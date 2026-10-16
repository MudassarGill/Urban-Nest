function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-navy px-6 py-16 text-center text-white">
      <h1 className="font-heading text-4xl font-bold md:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-3 max-w-xl text-lg text-white/70">{subtitle}</p>}
    </section>
  );
}

export default PageBanner;