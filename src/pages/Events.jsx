import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { getEventLists } from "../utils/eventUtils";
import EventCard from "../components/events/EventCard";
import PastEventCard from "../components/events/PastEventCard";

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { upcoming, past } = getEventLists();

  return (
    <main className="min-h-screen text-[#2A1E68]">

      {/* SOFT PURPLE BACKGROUND */}
      <section className="min-h-screen bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-4 py-14 sm:px-6 md:py-20">

        <div className="mx-auto max-w-6xl">

          {/* PAGE HEADER */}
          <div className="mb-10 text-center">
            <p className="font-black uppercase tracking-[0.2em] text-[#B46B00]">
              Brooklyn's TCG Community
            </p>

            <h1 className="mt-3 text-4xl font-black text-[#2A1E68] md:text-6xl">
              BKTCG Shows
            </h1>

            <p className="mx-auto mt-4 max-w-xl rounded-xl bg-white/70 p-3 text-[#2A1E68]/75">
              Buy, sell, trade, and connect with fellow collectors.
            </p>
          </div>

          {/* EVENT TABS */}
          <div className="mb-9 flex justify-center">
            <div className="inline-flex rounded-2xl border border-[#2A1E68]/10 bg-white/95 p-1.5 shadow-lg">

              {["upcoming", "past"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={activeTab === tab}
                  className={`rounded-xl px-5 py-3 text-sm font-bold transition sm:px-7 sm:text-base ${
                    activeTab === tab
                      ? "bg-[#2A1E68] text-white"
                      : "text-[#2A1E68]/70 hover:text-[#2A1E68]"
                  }`}
                >
                  {tab === "upcoming"
                    ? `Upcoming (${upcoming.length})`
                    : `Past Shows (${past.length})`}
                </button>
              ))}

            </div>
          </div>

          {/* UPCOMING EVENTS */}
          {activeTab === "upcoming" ? (
            upcoming.length ? (
              <div className="space-y-10">

                {/* FEATURED EVENT */}
                <EventCard event={upcoming[0]} featured />

                {/* ADDITIONAL UPCOMING EVENTS */}
                {upcoming.length > 1 && (
                  <div>
                    <h2 className="mb-5 rounded-xl bg-white/95 px-5 py-3 text-2xl font-black">
                      More Upcoming Shows
                    </h2>

                    <div className="space-y-6">
                      {upcoming.slice(1).map((event) => (
                        <EventCard
                          key={event.id}
                          event={event}
                        />
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (

              /* NO UPCOMING EVENTS */
              <div className="mx-auto max-w-3xl rounded-3xl border border-[#2A1E68]/10 bg-white/95 p-10 text-center shadow-xl">

                <h2 className="text-3xl font-black">
                  More Shows Coming Soon
                </h2>

                <p className="mt-4 text-[#2A1E68]/75">
                  Stay tuned for the next BKTCG Show announcement.
                </p>

                <a
                  href="https://www.instagram.com/bktcgshow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#2A1E68] px-6 py-3 font-bold text-white transition hover:bg-[#35267F]"
                >
                  Follow BKTCG

                  <ExternalLink
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </a>

              </div>
            )
          ) : (

            /* PAST EVENTS */
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {past.map((event) => (
                <PastEventCard
                  key={event.id}
                  event={event}
                />
              ))}
            </div>

          )}

        </div>
      </section>
    </main>
  );
}