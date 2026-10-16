function EmptyState({ icon, title, text, children }) {
  return (
    <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-lg shadow-navy/10">
      {icon && <div className="mb-4 flex justify-center text-golddark">{icon}</div>}
      <h2 className="mb-2 font-heading text-2xl font-bold">{title}</h2>
      <p className="mb-6">{text}</p>
      {children}
    </div>
  );
}

export default EmptyState;