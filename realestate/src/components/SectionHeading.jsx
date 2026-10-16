function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="mb-12 text-center">
      <h2 className={`font-heading text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-lg ${light ? "text-white/70" : "text-navy/70"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;