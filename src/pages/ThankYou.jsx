function ThankYou() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 text-white">
      <div data-page-motion="header" className="max-w-xl text-center">
        <p className="font-bold uppercase tracking-widest text-[#FFA500]">
          Message Sent
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Thanks For Reaching Out!
        </h1>

        <p className="mt-5 text-lg text-white/70">
          Your message has been sent to the BKTCG Show team.
          We'll get back to you as soon as possible.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-7 py-3 font-black text-[#0B1D5A]"
        >
          Back To Home
        </a>
      </div>
    </main>
  );
}

export default ThankYou;