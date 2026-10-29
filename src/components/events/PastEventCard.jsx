import { useState } from "react";
import EventDetails from "./EventDetails";
import EventFloorplan from "./EventFloorplan";

export default function PastEventCard({ event }) {
  const [expanded, setExpanded] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
  const hasMap = Boolean(event.treasureMapUrl || event.floorplan || event.treasureMap);

  return (
    <article className="overflow-hidden rounded-2xl border border-[#2A1E68]/10 bg-[#F8F7FF] shadow-lg">
      {event.image && <div className="flex h-56 items-center justify-center bg-gradient-to-br from-[#0B1D5A] to-[#5B2DB8] p-3"><img src={event.image} alt={`${event.title} poster`} loading="lazy" decoding="async" className="h-full w-full object-contain" /></div>}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#5B2DB8]">{event.displayDate}</p>
        <h3 className="mt-2 text-xl font-black text-[#2A1E68]">{event.title}</h3>
        <p className="mt-2 text-sm text-[#2A1E68]/70">{event.location}</p>
        <button type="button" aria-expanded={expanded} onClick={() => { setExpanded(!expanded); if (expanded) setMapOpen(false); }} className="mt-5 w-full rounded-xl bg-[#2A1E68] px-5 py-3 font-bold text-white">{expanded ? "Hide Recap −" : "View Event +"}</button>
        {expanded && <div className="mt-4 space-y-3"><EventDetails event={event} />{hasMap && <><button type="button" aria-expanded={mapOpen} onClick={() => setMapOpen(!mapOpen)} className="w-full rounded-xl border border-[#2A1E68]/20 bg-white px-4 py-3 font-bold text-[#2A1E68]">{mapOpen ? "Hide Floorplan −" : "View Floorplan +"}</button>{mapOpen && <EventFloorplan event={event} />}</>}</div>}
      </div>
    </article>
  );
}
