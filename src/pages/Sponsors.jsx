import { ExternalLink } from "lucide-react";

import triCountyLogo from "../assets/sponsors/tri-county-tcg.webp";
import pressPlayLogo from "../assets/sponsors/press-play-cards.webp";
import retroGamesLogo from "../assets/sponsors/retro-games-toys-li.webp";
import dragonCardLabLogo from "../assets/sponsors/dragon-card-lab.webp";

function Sponsors() {
  const sponsors = [
    {
      name: "Dragon Card Lab",
      logo: dragonCardLabLogo,
      alt: "Dragon Card Lab logo",
      url: "https://dragoncardlab.com/",
      linkLabel: "Visit Website",
    },
    {
      name: "Press Play Cards",
      logo: pressPlayLogo,
      alt: "Press Play Cards logo",
      url: "https://www.instagram.com/pressplaycards/?hl=en",
      linkLabel: "Visit Instagram",
    },
    {
      name: "Retro Games & Toys of LI",
      logo: retroGamesLogo,
      alt: "Retro Games & Toys of LI logo",
      url: "https://www.instagram.com/retrogamesandtoysofli/?hl=en",
      linkLabel: "Visit Instagram",
    },
    {
      name: "Tri County TCG",
      logo: triCountyLogo,
      alt: "Tri County TCG logo",
      url: "https://www.instagram.com/tricountytcg/",
      linkLabel: "Visit Instagram",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] text-[#2A1E68]">
      {/* PAGE HEADER */}
      <section className="px-5 pb-10 pt-20 text-center sm:px-6 md:pt-24">
        <div data-page-motion="header" className="mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-[0.2em] text-[#B46B00]">
            Our Partners
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            BKTCG Sponsors
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#2A1E68]/75">
            Meet the incredible sponsors helping bring Brooklyn's trading
            card community together.
          </p>
        </div>
      </section>

      {/* SPONSOR CARDS */}
      <section className="px-5 pb-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <a
                data-page-motion="stamp"
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${sponsor.name} externally`}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-3xl
                  border-2
                  border-[#A78BFA]/40
                  bg-white/95
                  p-6
                  text-center
                  shadow-[0_0_20px_rgba(139,92,246,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#8B5CF6]
                  hover:shadow-[0_0_35px_rgba(139,92,246,0.4)]
                "
              >
                {/* SPONSOR LOGO */}
                <div className="flex h-44 w-full items-center justify-center rounded-2xl bg-[#F8F7FF] p-5">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.alt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* SPONSOR NAME */}
                <h2 className="mt-6 text-xl font-black text-[#2A1E68]">
                  {sponsor.name}
                </h2>

                {/* EXTERNAL LINK */}
                <span className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-bold text-[#5B2DB8] transition-colors group-hover:text-[#2A1E68]">
                  {sponsor.linkLabel}

                  <ExternalLink
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP CTA */}
      <section className="px-5 pb-24 sm:px-6">
        <div data-page-motion="reveal" className="mx-auto max-w-4xl rounded-3xl border border-[#A78BFA]/40 bg-white/90 px-6 py-12 text-center shadow-[0_0_30px_rgba(139,92,246,0.15)] sm:px-10">
          <p className="font-bold uppercase tracking-widest text-[#B46B00]">
            Partner With Us
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Interested In Sponsoring BKTCG?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[#2A1E68]/75">
            Connect your brand with Brooklyn's trading card community.
            Reach out to learn more about sponsorship opportunities at
            upcoming BKTCG events.
          </p>

          <form
            name="sponsorship"
            method="POST"
            data-netlify="true"
            action="/sponsor-thank-you"
            className="mx-auto mt-9 max-w-xl space-y-4 text-left"
          >
            <input
              type="hidden"
              name="form-name"
              value="sponsorship"
            />

            <div>
              <label
                htmlFor="sponsor-name"
                className="mb-2 block text-sm font-bold"
              >
                Your Name
              </label>

              <input
                id="sponsor-name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full rounded-xl border border-[#A78BFA]/40 bg-white px-4 py-3 outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="sponsor-email"
                className="mb-2 block text-sm font-bold"
              >
                Email Address
              </label>

              <input
                id="sponsor-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#A78BFA]/40 bg-white px-4 py-3 outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="sponsor-business"
                className="mb-2 block text-sm font-bold"
              >
                Business / Brand Name
              </label>

              <input
                id="sponsor-business"
                name="business"
                type="text"
                required
                placeholder="Your business or brand"
                className="w-full rounded-xl border border-[#A78BFA]/40 bg-white px-4 py-3 outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
              />
            </div>

            <div>
              <label
                htmlFor="sponsor-message"
                className="mb-2 block text-sm font-bold"
              >
                Message
              </label>

              <textarea
                id="sponsor-message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your brand and sponsorship interest..."
                className="w-full resize-y rounded-xl border border-[#A78BFA]/40 bg-white px-4 py-3 outline-none transition focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-4 font-black text-[#2A1E68] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,165,0,0.35)]"
            >
              Submit Sponsorship Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Sponsors;