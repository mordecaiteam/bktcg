import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Using Our Website",
    paragraphs: [
      "This website provides information about BKTCG Show, including events, sponsors, and ways to contact our team. You agree to use the website lawfully and not interfere with its security, functionality, or other visitors' use.",
    ],
  },
  {
    title: "2. Event Information",
    paragraphs: [
      "Event dates, locations, schedules, admission details, vendor availability, and other information may change. We work to keep listings accurate, but details should be confirmed through the current event listing or directly with BKTCG before you travel or make plans.",
    ],
  },
  {
    title: "3. Tickets and Third-Party Platforms",
    paragraphs: [
      "Ticket purchases or event registrations may be handled by independent third-party platforms, including Treasure. When you leave our website or interact with an embedded third-party service, that provider's terms, privacy policy, checkout process, and any disclosed fees may apply.",
      "Refunds, transfers, cancellations, and admission conditions are governed by the policies presented for the specific event or ticket purchase, together with applicable law. This website does not itself establish a universal no-refund policy.",
    ],
  },
  {
    title: "4. Vendors and Sponsors",
    paragraphs: [
      "Submitting a vendor, sponsor, or partnership inquiry does not guarantee a table, sponsorship placement, or participation in an event. Any confirmed arrangements, fees, deadlines, or benefits should be set out separately in the applicable event listing, confirmation, or written agreement.",
    ],
  },
  {
    title: "5. Event Attendance and Conduct",
    paragraphs: [
      "Attendees and participants are expected to follow venue rules, posted event instructions, and applicable laws, and to treat other attendees, vendors, and staff respectfully. Venue access and safety requirements may apply. Any removal or denial of admission is subject to applicable law and the terms communicated for the event.",
    ],
  },
  {
    title: "6. Photography and Media",
    paragraphs: [
      "Photography and video recording may take place at BKTCG events. If you have questions about event photography, or wish to raise a concern about an image used on our website or social media, please contact us. Any specific photography notices or permissions provided for an event will control where applicable.",
    ],
  },
  {
    title: "7. Website Content and Links",
    paragraphs: [
      "Unless otherwise noted, website text, branding, and original materials are provided for information about BKTCG Show and may not be reused in a way that misrepresents affiliation or endorsement. Trademarks and images belonging to others remain the property of their respective owners.",
      "Links to external websites are provided for convenience. We are not responsible for third-party content, availability, or practices.",
    ],
  },
  {
    title: "8. Website Availability and Liability",
    paragraphs: [
      "We aim to keep the website available and accurate, but it may occasionally be interrupted or contain errors. To the extent permitted by applicable law, the website is provided without guarantees of uninterrupted access or error-free information. Nothing in these terms limits rights or remedies that cannot lawfully be excluded.",
    ],
  },
  {
    title: "9. Updates to These Terms",
    paragraphs: [
      "We may revise these Terms of Service as the website or our event operations evolve. Updated terms will be posted here with a revised effective date. Additional terms may apply to specific events or transactions.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-4 py-16 text-[#2A1E68] sm:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header data-page-motion="header" className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6B52D9]">BKTCG Show</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-[#2A1E68]/60">Effective date: October 30, 2026</p>
        </header>
        <article className="rounded-3xl border border-[#A78BFA]/40 bg-white/95 p-6 shadow-[0_0_28px_rgba(139,92,246,0.13)] sm:p-10">
          <p data-page-motion="reveal" className="leading-7 text-[#2A1E68]/80">
            Welcome to BKTCG Show. These Terms of Service describe the conditions for using our website. By using this website, you agree to these terms, subject to applicable law.
          </p>
          <div className="mt-9 space-y-9">
            {sections.map(({ title, paragraphs }) => (
              <section data-page-motion="reveal" key={title}>
                <h2 className="text-xl font-black sm:text-2xl">{title}</h2>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-7 text-[#2A1E68]/75">{paragraph}</p>
                ))}
              </section>
            ))}
            <section data-page-motion="reveal">
              <h2 className="text-xl font-black sm:text-2xl">10. Contact</h2>
              <p className="mt-3 leading-7 text-[#2A1E68]/75">
                For questions about these terms, contact{" "}
                <a className="font-bold text-[#5B2DB8] underline underline-offset-2" href="mailto:bktcgshow@gmail.com">bktcgshow@gmail.com</a>.
              </p>
            </section>
          </div>
        </article>
        <div data-page-motion="reveal" className="mt-8 text-center text-sm font-semibold">
          <Link to="/privacy" className="text-[#5B2DB8] underline underline-offset-4 hover:text-[#2A1E68]">Read our Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
}
