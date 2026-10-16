import { Link } from "react-router";

function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <p className="font-heading text-7xl font-bold text-gold">404</p>
      <h1 className="mb-3 mt-2 font-heading text-4xl font-bold">Page not found</h1>
      <p className="mb-8 text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="inline-block rounded-full bg-navy px-8 py-4 font-bold text-white hover:bg-golddark">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;