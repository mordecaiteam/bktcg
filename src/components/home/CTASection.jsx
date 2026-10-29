import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#FFA500] via-[#FFD24A] to-[#FFA500] px-6 py-20 text-center text-[#2A1E68] shadow-[0_0_80px_rgba(255,165,0,.35)]">
      <h2 className="text-3xl font-black md:text-5xl">
        Ready To Join The Show?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold">
        Get your tickets and experience Brooklyn&apos;s trading card community
        in person.
      </p>

      <Link
        to="/events"
        className="mt-8 inline-block rounded-xl bg-[#2A1E68] px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#35267F]"
      >
        Get Tickets
      </Link>
    </section>
  );
}

export default CTASection;