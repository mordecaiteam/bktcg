function FeatureCards() {
  const features = [
    {
      title: "Buy",
      text: "Shop rare cards, sealed products, graded slabs, and collectibles from trusted vendors.",
    },
    {
      title: "Sell",
      text: "Bring your collection and connect with buyers looking for their next favorite card.",
    },
    {
      title: "Trade",
      text: "Meet other collectors, make deals, and grow your collection in person.",
    },
  ];

  return (
    <section className="bg-[#2A1E68] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-[#4FCBFF]">
            What To Expect
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Built For Collectors
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-[#4FCBFF]/10 bg-white/5 p-8 shadow-lg backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-[#4FCBFF] hover:bg-white/10"
            >
              <h3 className="text-4xl font-black text-[#FFA500]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-relaxed text-white/80">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;