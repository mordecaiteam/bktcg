import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const ticketLink =
    "https://www.ontreasure.com/u/bktcgshow";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#2A1E68]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="transition duration-300 hover:scale-105"
        >
          <img
            src="/bktcg-logo.webp"
            alt="BKTCG Show Logo"
            className="h-14 w-auto drop-shadow-xl md:h-16"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            About Us
          </Link>

          <Link
            to="/events"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Events
          </Link>

          <Link
            to="/sponsors"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Sponsors
          </Link>

          <Link
            to="/contact"
            className="font-semibold transition duration-200 hover:text-[#4FCBFF]"
          >
            Contact Us
          </Link>
        </div>

        <button
          onClick={() =>
            window.open(ticketLink, "_blank")
          }
          className="hidden rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-6 py-3 font-bold text-[#0B1D5A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,.5)] md:block"
        >
          Get Tickets
        </button>

        <button
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl font-black text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0B1D5A]/95 px-6 py-6 shadow-2xl md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              onClick={closeMenu}
              to="/"
              className="font-bold hover:text-[#4FCBFF]"
            >
              Home
            </Link>

            <Link
              onClick={closeMenu}
              to="/about"
              className="font-bold hover:text-[#4FCBFF]"
            >
              About Us
            </Link>

            <Link
              onClick={closeMenu}
              to="/events"
              className="font-bold hover:text-[#4FCBFF]"
            >
              Events
            </Link>

            <Link
              onClick={closeMenu}
              to="/sponsors"
              className="font-bold hover:text-[#4FCBFF]"
            >
              Sponsors
            </Link>

            <Link
              onClick={closeMenu}
              to="/contact"
              className="font-bold hover:text-[#4FCBFF]"
            >
              Contact Us
            </Link>

            <button
              onClick={() => {
                closeMenu();
                window.open(
                  ticketLink,
                  "_blank"
                );
              }}
              className="mt-2 rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-6 py-3 font-black text-[#0B1D5A] shadow-lg"
            >
              Get Tickets
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;