function FeaturedGames() {
  const games = [
    {
      title: "Pokémon",
      description:
        "Singles, slabs, sealed products, vintage cards, modern releases, and more.",
    },
    {
      title: "One Piece",
      description:
        "Singles, graded cards, sealed products, chase cards, and collectibles.",
    },
  ];

  const collectibles = [
    "Raw Singles",
    "Graded Slabs",
    "Sealed Products",
    "Vintage Cards",
    "Modern Releases",
    "Collectibles",
  ];

  return (
    <section className="bg-[#0B1D5A] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
            Popular At BKTCG
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Brooklyn&apos;s Pokémon & One Piece Show
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Explore tables filled with cards, slabs, sealed products, and
            collectibles from vendors across the hobby.
          </p>
        </div>

        {/* Main Games */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {games.map((game) => (
            <div
              key={game.title}
              className="group rounded-3xl border border-[#4FCBFF]/20 bg-white/10 p-8 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#FFA500] hover:bg-white/15"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-[#4FCBFF]">
                Featured TCG
              </p>

              <h3 className="mt-3 text-4xl font-black text-[#FFA500]">
                {game.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/75">
                {game.description}
              </p>
            </div>
          ))}
        </div>

        {/* What You'll Find */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#4FCBFF]">
            What You&apos;ll Find
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {collectibles.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#2A1E68]/40 px-5 py-4 text-center font-bold text-white/85 transition hover:border-[#FFA500]/60"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedGames;