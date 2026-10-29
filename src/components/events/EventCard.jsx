import { useState } from "react";
import { ExternalLink } from "lucide-react";
import EventDetails from "./EventDetails";
import EventFloorplan from "./EventFloorplan";

export default function EventCard({ event, featured = false }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const hasMap = Boolean(event.treasureMapUrl || event.floorplan || event.treasureMap);

  return (
    <article className="overflow-hidden rounded-3xl border border-[#2A1E68]/10 bg-[#F8F7FF] shadow-[0_15px_40px_rgba(0,0,0,.12)]">
      <div className={`grid ${featured ? "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" : "md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)]"}`}>
        {event.image && (
          <div className="flex items-center justify-center bg-gradient-to-br from-[#0B1D5A] to-[#5B2DB8] p-5">
            <img src={event.image} alt={`${event.title} poster`} loading={featured ? "eager" : "lazy"} decoding="async" className={`w-full rounded-xl object-contain ${featured ? "max-h-[540px]" : "max-h-[360px]"}`} />
          </div>
        )}
        <div className="flex flex-col justify-center p-6 sm:p-8">
          {featured && <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#B46B00]">Next BKTCG Show</p>}
          <p className="text-sm font-bold uppercase tracking-wider text-[#5B2DB8]">{event.displayDate}</p>
          <h2 className={`mt-2 font-black leading-tight text-[#2A1E68] ${featured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{event.title}</h2>
          <p className="mt-4 text-sm font-medium text-[#2A1E68]/80">{event.time}</p>
          <p className="mt-1 text-sm text-[#2A1E68]/75">{event.location}</p>
          <p className="mt-1 text-sm text-[#2A1E68]/65">{event.address}</p>
          {featured && <p className="mt-4 text-sm leading-relaxed text-[#2A1E68]/75">{event.description}</p>}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {event.ticketLink && (
              <a href={event.ticketLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFA500] px-6 py-3 text-center font-black text-[#2A1E68] transition hover:bg-[#FFD24A]">
                Get Tickets <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
              </a>
            )}
            {event.vendorLink && (
              <a href={event.vendorLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2A1E68] px-6 py-3 text-center font-black text-white transition hover:bg-[#35267F]">
                Become a Vendor <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-[#2A1E68]/10 p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" aria-expanded={detailsOpen} onClick={() => setDetailsOpen(!detailsOpen)} className="flex-1 rounded-xl bg-white px-5 py-3 text-left font-bold text-[#2A1E68] shadow-sm">{detailsOpen ? "− Hide Details" : "+ Event Details"}</button>
          {hasMap && <button type="button" aria-expanded={mapOpen} onClick={() => setMapOpen(!mapOpen)} className="flex-1 rounded-xl bg-white px-5 py-3 text-left font-bold text-[#2A1E68] shadow-sm">{mapOpen ? "− Hide Floorplan" : "+ View Floorplan"}</button>}
        </div>
        {detailsOpen && <div className="mt-4"><EventDetails event={event} /></div>}
        {mapOpen && hasMap && <div className="mt-4"><EventFloorplan event={event} /></div>}
      </div>
    </article>
  );
}
