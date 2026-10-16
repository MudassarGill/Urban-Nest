import PageBanner from "../components/PageBanner";
import AgentCard from "../components/AgentCard";
import { agents } from "../data/agents";

function Agents() {
  return (
    <>
      <PageBanner title="Our Agents" subtitle="Local experts who will help you every step of the way." />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Agents;