import TreasureVenueMap from "../TreasureVenueMap";

export default function EventFloorplan({ event }) {
  if (event.treasureMapUrl) {
    return <TreasureVenueMap eventUrl={event.treasureMapUrl} title={`${event.title} vendor map`} />;
  }
  if (event.floorplan) {
    return <div className="overflow-hidden rounded-2xl bg-white p-3"><img src={event.floorplan} alt={`${event.title} floorplan`} loading="lazy" className="mx-auto max-h-[800px] w-full object-contain" /></div>;
  }
  return <p className="rounded-xl bg-white p-5 text-center text-[#2A1E68]/70">Floorplan coming soon.</p>;
}
