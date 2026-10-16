import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Heart, Menu, X } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/agents", label: "Agents" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { favorites } = useFavorites();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isOpen || pathname !== "/";

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors hover:text-gold ${isActive ? "text-gold" : "text-white"}`;

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full text-white transition-colors duration-300 ${
        solid ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="font-heading text-2xl font-bold"
        >
          Urban Nest
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link to="/favorites" aria-label="Favorites" className="relative">
            <Heart size={24} />
            {favorites.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="hidden rounded-full bg-gold px-6 py-2.5 font-bold text-navy hover:bg-white md:block"
          >
            Sign In
          </Link>

          <button
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-5 bg-navy px-6 pb-8 pt-2 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-gold px-8 py-3 font-bold text-navy"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;