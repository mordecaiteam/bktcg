import events from "../data/events";

export function getEventLists(now = new Date()) {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const upcoming = [];
  const past = [];
  for (const event of events) {
    const date = new Date(`${event.date}T00:00:00`);
    if (Number.isNaN(date.getTime())) continue;
    (date >= today ? upcoming : past).push(event);
  }
  upcoming.sort((a, b) => a.date.localeCompare(b.date));
  past.sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}
