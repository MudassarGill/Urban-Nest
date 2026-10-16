import { Link } from "react-router";

const explore = [
  { to: "/properties", label: "Properties" },
  { to: "/agents", label: "Agents" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const account = [
  { to: "/login", label: "Sign In" },
  { to: "/signup", label: "Sign Up" },
  { to: "/favorites", label: "Favorites" },
];

function Footer() {
  return (
    <footer className="bg-[#0B1824] px-6 pb-6 pt-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-3 font-heading text-2xl font-bold">Urban Nest</p>
          <p className="text-white/70">Homes for every stage of life.</p>
        </div>

        <div>
          <h3 className="mb-3 font-bold">Explore</h3>
          <ul className="flex flex-col gap-2 text-white/70">
            {explore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold">Account</h3>
          <ul className="flex flex-col gap-2 text-white/70">
            {account.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-bold">Contact</h3>
          <p className="text-white/70">
            [YOUR ADDRESS]<br />[YOUR PHONE]<br />[YOUR EMAIL]
          </p>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-white/20 pt-6 text-sm text-white/60">
        © {new Date().getFullYear()} Urban Nest. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;