import { ExternalLink } from "lucide-react";

export default function EventDetails({ event }) {
  return (
    <div className="grid gap-6 rounded-2xl bg-white p-5 text-[#2A1E68] sm:grid-cols-2 sm:p-7">
      <div>
        <h4 className="font-black text-[#0B1D5A]">Show information</h4>
        <p className="mt-2 text-sm leading-relaxed text-[#2A1E68]/75">{event.description}</p>
        {event.focus && <p className="mt-3 text-sm text-[#2A1E68]/75"><strong>Featuring:</strong> {event.focus}</p>}
        {event.venueSize && <p className="mt-3 text-sm"><strong>Show size:</strong> {event.venueSize}</p>}
        {event.vendors && <p className="mt-1 text-sm"><strong>Vendors:</strong> {event.vendors}</p>}
      </div>
      <div>
        <h4 className="font-black text-[#0B1D5A]">Hours & admission</h4>
        <p className="mt-2 text-sm">{event.time}</p>
        {event.earlyBirdTime && <p className="mt-2 text-sm"><strong>Early Bird:</strong> {event.earlyBirdTime}</p>}
        {event.generalAdmissionTime && <p className="mt-1 text-sm"><strong>General Admission:</strong> {event.generalAdmissionTime}</p>}
        {event.ticketTypes?.length > 0 && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#2A1E68]/75">{event.ticketTypes.map((item) => <li key={item}>{item}</li>)}</ul>}
      </div>
      <div className="sm:col-span-2">
        <h4 className="font-black text-[#0B1D5A]">Getting there</h4>
        <p className="mt-2 text-sm">{event.location} · {event.address}</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {event.googleMaps && (
            <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2A1E68] px-4 py-2 text-sm font-bold text-white" href={event.googleMaps} target="_blank" rel="noopener noreferrer">
              Google Maps <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          )}
          {event.appleMaps && (
            <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2A1E68] px-4 py-2 text-sm font-bold" href={event.appleMaps} target="_blank" rel="noopener noreferrer">
              Apple Maps <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
