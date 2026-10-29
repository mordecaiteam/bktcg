import { ExternalLink } from "lucide-react";
import triCountyLogo from "../assets/sponsors/tri-county-tcg.webp";

import pressPlayLogo from "../assets/sponsors/press-play-cards.webp";

import retroGamesLogo from "../assets/sponsors/retro-games-toys-li.webp";

const sponsors = [

  {

    name: "Tri County TCG",

    logo: triCountyLogo,

    alt: "Tri County TCG logo",

    instagram: "https://www.instagram.com/tricountytcg/",

  },

  {

    name: "Press Play Cards",

    logo: pressPlayLogo,

    alt: "Press Play Cards logo",

    instagram: "https://www.instagram.com/pressplaycards/?hl=en",

  },

  {

    name: "Retro Games & Toys of LI",

    logo: retroGamesLogo,

    alt: "Retro Games & Toys of LI logo",

    instagram: "https://www.instagram.com/retrogamesandtoysofli/?hl=en",

  },

];

function Sponsors() {

  return (

    <main className="bg-[#2A1E68] text-white">
      <style>{`
        .bktcg-sponsors-background {
          background: linear-gradient(135deg, #F5F2FF 0%, #F8F7FF 48%, #EDF5FF 100%);
        }
        .bktcg-sponsor-glow {
          box-shadow: 0 0 0 1px rgba(107,82,217,.22),
                      0 0 20px rgba(107,82,217,.20),
                      0 12px 35px rgba(42,30,104,.10);
        }
        .bktcg-sponsor-glow:hover,
        .bktcg-sponsor-glow:focus-visible {
          box-shadow: 0 0 0 2px rgba(79,203,255,.7),
                      0 0 24px rgba(107,82,217,.38),
                      0 0 44px rgba(79,203,255,.22),
                      0 18px 42px rgba(42,30,104,.15);
        }
        @media (prefers-reduced-motion: reduce) {
          .bktcg-sponsor-glow { transition: none; }
        }
      `}</style>

      {/* CURRENT SPONSORS */}

      <section className="bktcg-sponsors-background py-20 text-[#0B1D5A] md:py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#6B52D9]">

              Supporting BKTCG

            </p>

            <h1 className="mt-3 text-4xl font-black md:text-5xl">

              Our Current Sponsors

            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#0B1D5A]/65">

              We appreciate the businesses helping BKTCG Show grow and bringing

              the local TCG community together.

            </p>

          </div>

          {/* SPONSOR CARDS */}

          <div className="grid gap-7 md:grid-cols-3">

            {sponsors.map((sponsor) => (

              <a

                key={sponsor.name}

                href={sponsor.instagram}

                target="_blank"

                rel="noopener noreferrer"

                aria-label={`Visit ${sponsor.name} on Instagram`}

                className="bktcg-sponsor-glow group block overflow-hidden rounded-3xl border border-[#6B52D9]/25 bg-white transition-all duration-300 hover:-translate-y-2 focus-visible:outline-none"

              >

                <div className="flex h-64 items-center justify-center p-8">

                  <img

                    src={sponsor.logo}

                    alt={sponsor.alt}

                    className="max-h-48 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"

                  />

                </div>

                <div className="border-t border-[#2A1E68]/10 bg-[#F4F2FF] px-5 py-5 text-center">

                  <h2 className="text-xl font-black transition-colors duration-300 group-hover:text-[#2A1E68]">

                    {sponsor.name}

                  </h2>

                  <p className="mt-1 text-sm font-semibold text-[#2A1E68]/50">

                    Official BKTCG Sponsor

                  </p>

                  <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#6B52D9] transition-colors duration-300">

                    <span className="inline-flex items-center justify-center gap-2">
                      Visit Instagram
                      <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
                    </span>

                  </p>

                </div>

              </a>

            ))}

          </div>

          {/* THANK YOU + CTA */}

          <div className="mt-14 text-center">

            <p className="text-lg font-bold text-[#2A1E68]/70 md:text-xl">

              Thank you to every sponsor who helps make BKTCG Show possible.

            </p>

            <a

              href="#become-a-sponsor"

              className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-7 py-4 font-black text-[#0B1D5A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,.4)]"

            >

              Become a Sponsor

            </a>

          </div>

        </div>

      </section>

      {/* WHY SPONSOR */}

      <section className="bg-[#0B1D5A] py-20 md:py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#4FCBFF]">

                Partner With Us

              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">

                Put Your Business In Front Of The{" "}

                <span className="text-[#4FCBFF]">

                  TCG Community.

                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">

                Sponsoring BKTCG gives businesses an opportunity to connect

                with collectors, vendors, families, and fans while supporting

                the growth of the local trading card community.

              </p>

            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

                <div className="mb-5 h-2 w-12 rounded-full bg-[#4FCBFF]" />

                <h3 className="text-xl font-black">

                  Event Visibility

                </h3>

                <p className="mt-3 leading-6 text-white/65">

                  Get your brand seen by attendees throughout the BKTCG

                  experience.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

                <div className="mb-5 h-2 w-12 rounded-full bg-[#4FCBFF]" />

                <h3 className="text-xl font-black">

                  Community Reach

                </h3>

                <p className="mt-3 leading-6 text-white/65">

                  Connect with an active local community of collectors,

                  players, vendors, and families.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

                <div className="mb-5 h-2 w-12 rounded-full bg-[#FFA500]" />

                <h3 className="text-xl font-black">

                  Brand Placement

                </h3>

                <p className="mt-3 leading-6 text-white/65">

                  Opportunities may include website, social media, event,

                  and on-site recognition.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6">

                <div className="mb-5 h-2 w-12 rounded-full bg-[#FFA500]" />

                <h3 className="text-xl font-black">

                  Custom Partnerships

                </h3>

                <p className="mt-3 leading-6 text-white/65">

                  Have another sponsorship idea? Tell us what you have in mind

                  and we can discuss it.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SPONSOR INTEREST FORM */}

      <section

        id="become-a-sponsor"

        className="bktcg-sponsors-background scroll-mt-24 py-20 text-[#0B1D5A] md:py-28"

      >

        <div className="mx-auto max-w-5xl px-6">

          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">

            <div className="bg-[#2A1E68] px-7 py-9 text-white md:px-10">

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#4FCBFF]">

                Sponsorship Interest

              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">

                Interested In Supporting BKTCG?

              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-white/70">

                Tell us a little about your business and how you would like to

                partner with the show. Our team will get back to you.

              </p>

            </div>

            <form

              name="sponsor-interest"

              method="POST"

              action="/sponsor-thank-you"

              data-netlify="true"

              netlify-honeypot="bot-field"

              className="grid gap-6 p-7 md:grid-cols-2 md:p-10"

            >

              <input

                type="hidden"

                name="form-name"

                value="sponsor-interest"

              />

              <p className="hidden">

                <label>

                  Don't fill this out:

                  <input name="bot-field" />

                </label>

              </p>

              <label>

                <span className="mb-2 block text-sm font-bold">

                  Business / Organization *

                </span>

                <input

                  required

                  name="business"

                  type="text"

                  placeholder="Business name"

                  className="w-full rounded-xl border border-[#2A1E68]/15 bg-[#F7F8FC] px-4 py-3.5 outline-none transition focus:border-[#6B52D9]"

                />

              </label>

              <label>

                <span className="mb-2 block text-sm font-bold">

                  Contact Name *

                </span>

                <input

                  required

                  name="contact-name"

                  type="text"

                  placeholder="Your name"

                  className="w-full rounded-xl border border-[#2A1E68]/15 bg-[#F7F8FC] px-4 py-3.5 outline-none transition focus:border-[#6B52D9]"

                />

              </label>

              <label>

                <span className="mb-2 block text-sm font-bold">

                  Email *

                </span>

                <input

                  required

                  name="email"

                  type="email"

                  placeholder="you@business.com"

                  className="w-full rounded-xl border border-[#2A1E68]/15 bg-[#F7F8FC] px-4 py-3.5 outline-none transition focus:border-[#6B52D9]"

                />

              </label>

              <label>

                <span className="mb-2 block text-sm font-bold">

                  Website / Social

                </span>

                <input

                  name="website"

                  type="text"

                  placeholder="Website or social media"

                  className="w-full rounded-xl border border-[#2A1E68]/15 bg-[#F7F8FC] px-4 py-3.5 outline-none transition focus:border-[#6B52D9]"

                />

              </label>

              <label className="md:col-span-2">

                <span className="mb-2 block text-sm font-bold">

                  What are you interested in?

                </span>

                <select

                  name="sponsorship-interest"

                  defaultValue=""

                  className="w-full rounded-xl border border-[#2A1E68]/15 bg-[#F7F8FC] px-4 py-3.5 outline-none transition focus:border-[#6B52D9]"

                >

                  <option value="" disabled>

                    Select an option

                  </option>

                  <option value="event">

                    Event Sponsorship

                  </option>

                  <option value="promotional">

                    Promotional Partnership

                  </option>

                  <option value="custom">

                    Custom Partnership

                  </option>

                  <option value="other">

                    Other

                  </option>

                </select>

              </label>

              <label className="md:col-span-2">

                <span className="mb-2 block text-sm font-bold">

                  Tell Us More

                </span>

                <textarea

                  name="message"

                  rows="5"

                  placeholder="Tell us about your business and what you have in mind..."

                  className="w-full resize-none rounded-xl border border-[#2A1E68]/15 bg-[#F7F8FC] px-4 py-3.5 outline-none transition focus:border-[#6B52D9]"

                />

              </label>

              <div className="md:col-span-2">

                <button

                  type="submit"

                  className="w-full rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-7 py-4 font-black text-[#0B1D5A] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,165,0,.35)] md:w-auto"

                >

                  Submit Sponsorship Interest

                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </main>

  );

}

export default Sponsors;