function FeatureItem({ number, title, text }) {
  return (
    <div>
      <p className="font-heading text-4xl font-bold text-gold">{number}</p>
      <h3 className="mb-1 mt-1 text-xl font-bold">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}

export default FeatureItem;