import { ExternalLink } from "lucide-react";
import { getEventLists } from "../utils/eventUtils";

export default function NextEvent() {
  const { upcoming } = getEventLists();
  const nextEvent = upcoming[0];

  if (!nextEvent) return (
    <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl text-center"><p className="font-bold uppercase tracking-widest text-[#B46B00]">Next Event</p><h2 className="mt-3 text-4xl font-black text-[#2A1E68] md:text-5xl">More Shows Coming Soon</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-[#2A1E68]/70">Stay tuned for the next BKTCG Show announcement.</p><a href="/events" className="mt-8 inline-block rounded-xl bg-[#2A1E68] px-7 py-3 font-bold text-white">View Events</a></div></section>
  );

  const [, month, day] = nextEvent.date.split("-");

  return (
    <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><div className="mb-8 text-center"><p className="font-bold uppercase tracking-widest text-[#B46B00]">Next Event</p><h2 className="mt-3 text-4xl font-black text-[#2A1E68] md:text-5xl">Your Ticket To BKTCG Show</h2></div>
      <div className="relative overflow-hidden rounded-[32px] border-4 border-[#2A1E68] bg-gradient-to-r from-[#FFA500] via-[#FFD24A] to-[#FFA500] shadow-[0_25px_60px_rgba(0,0,0,.2)]"><div className="absolute left-0 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"/><div className="absolute right-0 top-1/2 h-14 w-14 translate-x-1/2 -translate-y-1/2 rounded-full bg-white"/>
      <div className="grid md:grid-cols-[1.3fr_auto_.7fr]"><div className="p-8 md:p-10"><p className="font-black tracking-[0.25em] text-[#2A1E68]">BKTCG SHOW</p><h3 className="mt-4 text-3xl font-black text-[#0B1D5A] md:text-5xl">{nextEvent.title}</h3><p className="mt-3 text-lg font-medium text-[#2A1E68]">{nextEvent.location} • {nextEvent.address}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Date", nextEvent.displayDate], ["Time", nextEvent.time], ["Event Size", nextEvent.vendors], ["Experience", "Buy • Sell • Trade"]].map(([label, value]) => <div key={label}><p className="text-sm font-bold uppercase text-[#2A1E68]/70">{label}</p><p className="mt-1 font-black text-[#0B1D5A]">{value}</p></div>)}</div></div>
      <div className="relative hidden w-[2px] md:block"><div className="absolute inset-y-0 left-1/2 border-l-4 border-dashed border-[#2A1E68]/30"/></div><div className="flex flex-col items-center justify-center bg-[#2A1E68] p-8 text-center text-white"><p className="text-sm font-bold tracking-[0.3em] text-[#4FCBFF]">ADMIT ONE</p><p className="mt-3 text-6xl font-black text-[#FFA500]">{month}</p><p className="text-2xl font-black">{day}</p><p className="mt-4 text-sm font-bold text-white/70">{nextEvent.location.toUpperCase()}</p>{nextEvent.ticketLink && <a href={nextEvent.ticketLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFA500] px-6 py-3 font-black text-[#2A1E68] transition hover:scale-105">Get Tickets <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" /></a>}</div></div></div>
    </div></section>
  );
}
