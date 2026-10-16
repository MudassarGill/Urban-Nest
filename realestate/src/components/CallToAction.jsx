import { Link } from "react-router";

function CallToAction() {
  return (
    <section className="bg-sand px-6 py-20 text-center">
      <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
        Ready to find your next home?
      </h2>
      <p className="mb-8 text-lg">Talk to an agent today, it only takes a minute.</p>
      <Link
        to="/contact"
        className="inline-block rounded-full bg-navy px-10 py-4 font-bold text-white hover:bg-golddark"
      >
        Contact Us
      </Link>
    </section>
  );
}

export default CallToAction;