import { Link } from "react-router-dom";

function SponsorThankYou() {
  return (
    <main className="flex min-h-[75vh] items-center bg-[#2A1E68] px-6 py-20 text-white">
      <div data-page-motion="header" className="mx-auto w-full max-w-3xl text-center">
        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#4FCBFF]/30 bg-[#4FCBFF]/10">
          <span className="text-4xl font-black text-[#4FCBFF]">
            ✓
          </span>
        </div>

        <p className="mt-7 font-bold uppercase tracking-[0.2em] text-[#4FCBFF]">
          Sponsorship Interest Received
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Thanks For Supporting{" "}
          <span className="text-[#4FCBFF]">
            BKTCG!
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
          We've received your sponsorship interest form. Thank you for
          considering partnering with BKTCG Show and supporting the trading
          card community.
        </p>

        <p className="mx-auto mt-3 max-w-2xl text-white/60">
          Our team will review your information and get back to you as soon
          as possible.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-3.5 font-black text-[#0B1D5A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,.4)]"
          >
            Back to Home
          </Link>

          <Link
            to="/events"
            className="rounded-xl border-2 border-white/30 px-8 py-3.5 font-black text-white transition-all duration-300 hover:border-[#4FCBFF] hover:bg-[#4FCBFF]/10 hover:text-[#4FCBFF]"
          >
            View Upcoming Events
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SponsorThankYou;