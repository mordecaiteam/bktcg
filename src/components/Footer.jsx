import { Link } from "react-router-dom";

import logo from "../assets/misc/MordecAI_logo.png";
import email_logo from "../assets/misc/gmail_logo.svg";
import ig_logo from "../assets/misc/ig_logo.svg";
import tiktok_logo from "../assets/misc/tiktok_logo.svg";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1D5A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6">

        {/* FOOTER GRID */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-10">

          {/* BKTCG DESCRIPTION */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-black text-[#FFA500]">
              BKTCG Show
            </h3>

            <p className="mt-4 max-w-sm leading-relaxed text-white/70">
              Brooklyn's premier trading card event bringing together
              collectors, vendors, players, and families through a shared
              passion for the hobby.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="min-w-0">
            <h3 className="text-lg font-black text-[#FFA500] md:text-xl">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm text-white/70 sm:text-base">

              <Link
                to="/"
                className="transition hover:text-[#4FCBFF]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="transition hover:text-[#4FCBFF]"
              >
                About Us
              </Link>

              <Link
                to="/events"
                className="transition hover:text-[#4FCBFF]"
              >
                Upcoming Events
              </Link>

              <Link
                to="/sponsors"
                className="transition hover:text-[#4FCBFF]"
              >
                Our Sponsors
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-[#4FCBFF]"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* CONNECT WITH US */}
<div className="min-w-0">
  <h3 className="whitespace-nowrap text-lg font-black text-[#FFA500] md:text-xl">
    Connect With Us
  </h3>

  <div className="mt-5 flex flex-col gap-2.5">

    {/* EMAIL BUTTON */}
    <a
      href="mailto:bktcgshow@gmail.com"
      aria-label="Email BKTCG Show"
      className="group flex w-full max-w-[170px] items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white transition-all duration-200 hover:border-[#FFA500] hover:bg-[#FFA500] hover:text-[#0B1D5A] active:scale-[0.98]"
    >
      <img
        src={email_logo}
        alt=""
        className="h-5 w-5 shrink-0 object-contain"
      />

      <span className="text-sm font-bold sm:text-base">
        Email Us
      </span>
    </a>

    {/* INSTAGRAM BUTTON */}
    <a
      href="https://www.instagram.com/bktcgshow/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit BKTCG Show on Instagram"
      className="group flex w-full max-w-[170px] items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white transition-all duration-200 hover:border-[#FFA500] hover:bg-[#FFA500] hover:text-[#0B1D5A] active:scale-[0.98]"
    >
      <img
        src={ig_logo}
        alt=""
        className="h-5 w-5 shrink-0 object-contain"
      />

      <span className="text-sm font-bold sm:text-base">
        @bktcgshow
      </span>
    </a>

    {/* TIKTOK BUTTON */}
    <a
      href="https://www.tiktok.com/@bktcgshow"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit BKTCG Show on TikTok"
      className="group flex w-full max-w-[170px] items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-white transition-all duration-200 hover:border-[#FFA500] hover:bg-[#FFA500] hover:text-[#0B1D5A] active:scale-[0.98]"
    >
      <img
        src={tiktok_logo}
        alt=""
        className="h-5 w-5 shrink-0 object-contain"
      />

      <span className="text-sm font-bold sm:text-base">
        @bktcgshow
      </span>
    </a>

  </div>
</div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-6">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            {/* COPYRIGHT */}
            <p className="text-center text-sm text-white/50 md:text-left">
              © {new Date().getFullYear()} BKTCG Show.
              All Rights Reserved.
            </p>

            {/* DEVELOPED BY MORDECAI */}
            <a
              href="https://getmordecai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition-all duration-300 hover:border-[#FFA500] hover:bg-white/10"
            >
              <span className="text-sm text-white/50 transition group-hover:text-white">
                Developed by
              </span>

              <img
                src={logo}
                alt="MordecAI"
                className="h-7 w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;