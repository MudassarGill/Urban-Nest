function AgentCard({ agent }) {
  return (
    <article className="group text-center">
      <div className="mb-4 overflow-hidden rounded-2xl shadow-lg shadow-navy/10">
        <img
          src={agent.image}
          alt={agent.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-heading text-xl font-bold">{agent.name}</h3>
      <p className="text-golddark">{agent.role}</p>
      <p className="text-sm text-navy/70">{agent.phone}</p>
    </article>
  );
}

export default AgentCard;