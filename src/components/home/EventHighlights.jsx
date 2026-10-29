function EventHighlights() {
  const highlights = [
    {
      value: "140+",
      label: "Tables",
      description: "A packed vendor floor to explore",
    },
    {
      value: "2",
      label: "Featured TCGs",
      description: "Pokémon & One Piece",
    },
    {
      value: "Brooklyn",
      label: "Local Community",
      description: "Hosted at Brooklyn College",
    },
    {
      value: "All Ages",
      label: "Welcome",
      description: "Collectors new and experienced",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-6 py-20 text-[#2A1E68]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-[#B46B00]">
            Event Highlights
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Why Attend BKTCG?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#2A1E68]/65">
            A Brooklyn card show built around collecting, community, and the
            hobby.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[#A78BFA]/40 bg-white/90 p-8 text-center shadow-[0_0_16px_rgba(139,92,246,0.14)] transition-all duration-300 hover:-translate-y-2 hover:border-[#8B5CF6] hover:shadow-[0_0_28px_rgba(139,92,246,0.32)]"
            >
              <p className="text-4xl font-black text-[#5B2DB8]">
                {item.value}
              </p>
              <p className="mt-3 text-lg font-black text-[#0B1D5A]">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#2A1E68]/65">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventHighlights;
