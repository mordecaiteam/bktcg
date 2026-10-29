import show10 from "../assets/hero/show-10.webp";

function AboutUs() {
  const values = [
    {
      title: "Community First",
      text: "BKTCG Show brings collectors, vendors, players, and families together through a shared love of the hobby.",
    },
    {
      title: "Trade & Connect",
      text: "The show creates space for collectors to meet, trade, make deals, and discover cards in person.",
    },
    {
      title: "For Every Collector",
      text: "From longtime collectors to kids discovering their first cards, BKTCG Show is built to welcome every experience level.",
    },
  ];

  const highlights = [
    "Brooklyn-based events",
    "Pokémon & One Piece focused",
    "Large vendor floors",
    "Singles & graded slabs",
    "Sealed products",
    "Collector community",
  ];

  return (
    <main className="bg-[#2A1E68] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28 text-center md:py-36">

        {/* BACKGROUND IMAGE */}
        <img
          src={show10}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK BLUE OVERLAY */}
        <div className="absolute inset-0 bg-[#0B1D5A]/70" />

        {/* PURPLE GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D5A]/55 via-[#2A1E68]/45 to-[#5B2DB8]/55" />

        {/* BLUE GLOW */}
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#4FCBFF]/20 blur-[120px]" />

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
            About BKTCG Show
          </p>

          <h1 className="mt-4 text-4xl font-black drop-shadow-lg md:text-6xl">
            Brooklyn&apos;s Trading Card Community
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 drop-shadow-md">
  BKTCG Show is a Brooklyn-based trading card event built around
  collecting, community, and bringing people in the hobby together.
</p>

{/* JOIN US CTA */}
<div className="mt-9 flex justify-center">
  <a
    href="/events"
    className="
      inline-flex
      items-center
      justify-center
      rounded-xl
      bg-gradient-to-r
      from-[#FFA500]
      to-[#FFD24A]
      px-10
      py-4
      text-lg
      font-black
      text-[#2A1E68]
      shadow-[0_8px_25px_rgba(255,165,0,0.25)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:scale-105
      hover:shadow-[0_0_30px_rgba(255,165,0,0.55)]
      active:scale-95
    "
  >
    Join Us
  </a>
</div>
        </div>
      </section>

      {/* MISSION — SOFT PURPLE BACKGROUND */}
      <section className="bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">

          <div>
            <p className="font-bold uppercase tracking-widest text-[#B46B00]">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Built For The Card Community
            </h2>
          </div>

          <p className="text-lg leading-relaxed text-[#2A1E68]/75">
            Our goal is to create an inclusive, high-energy environment where
            collectors can shop, trade, connect, and celebrate card culture.
            Whether you&apos;re hunting for Pokémon, searching for One Piece
            cards, meeting vendors, or just discovering the hobby, BKTCG Show
            is designed to make the experience welcoming and exciting.
          </p>

        </div>
      </section>

      {/* VALUES — KEEP DARK NAVY */}
      <section className="bg-[#0B1D5A] px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
              What We Stand For
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              More Than A Card Show
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-[#4FCBFF]/20 bg-white/10 p-8 shadow-lg backdrop-blur transition hover:-translate-y-2 hover:border-[#FFA500]"
              >
                <h3 className="text-2xl font-black text-[#FFA500]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/80">
                  {value.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHAT TO EXPECT — SOFT PURPLE BACKGROUND */}
      <section className="bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-6 py-20 text-[#2A1E68]">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-[#B46B00]">
              The BKTCG Experience
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              What You&apos;ll Find At Our Shows
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#2A1E68]/75">
              BKTCG events bring together vendors, collectors, and card fans
              from across the community for a full day centered around the
              hobby.
            </p>
          </div>

          {/* EXPERIENCE CARDS */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="
                  rounded-2xl
                  border border-[#A78BFA]/40
                  bg-white/90
                  p-6
                  text-center
                  font-bold
                  shadow-[0_0_15px_rgba(139,92,246,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#8B5CF6]
                  hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]
                "
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA — KEEP ORANGE */}
      <section className="bg-gradient-to-r from-[#FFA500] via-[#FFD24A] to-[#FFA500] px-6 py-20 text-center text-[#2A1E68]">
        <h2 className="text-3xl font-black md:text-5xl">
          Join The Brooklyn Card Community
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
          Buy, sell, trade, collect, and connect at BKTCG Show.
        </p>
      </section>

    </main>
  );
}

export default AboutUs;