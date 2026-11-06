import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "When you contact BKTCG Show or submit a sponsorship or vendor inquiry, we may receive information you provide, such as your name, email address, business or organization name, social media or website link, and message.",
      "Our website hosting and form providers may also process technical information, such as IP addresses, browser details, and request logs, to deliver the website and help protect it from misuse.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: [
      "We use submitted information to respond to questions, discuss sponsorships or vendor opportunities, communicate about BKTCG events, maintain website functionality, and address security or operational issues.",
      "We do not sell personal information submitted through our contact or sponsorship forms.",
    ],
  },
  {
    title: "3. Forms and Service Providers",
    paragraphs: [
      "Our website uses third-party services for hosting and form submissions. Information you submit through a form may be processed and stored by those providers so we can receive and respond to your message.",
      "If you choose to browse event listings, purchase tickets, or use an embedded third-party service such as Treasure, that service may collect information under its own privacy policy. BKTCG does not control third-party websites or their data practices.",
    ],
  },
  {
    title: "4. Cookies and Similar Technologies",
    paragraphs: [
      "The website and embedded third-party content may use cookies or similar technologies for essential functions, security, or preferences. Third-party services may have their own tracking practices. We do not claim that every third-party embed is cookie-free.",
    ],
  },
  {
    title: "5. Sharing and Retention",
    paragraphs: [
      "We may share information with service providers that help us operate the website or respond to inquiries, or when required by law. We retain inquiries only for as long as reasonably needed for communications, recordkeeping, or legal obligations, subject to provider settings and applicable law.",
    ],
  },
  {
    title: "6. Security",
    paragraphs: [
      "We take reasonable steps to protect information handled through the website, but no website, transmission, or storage system can be guaranteed completely secure.",
    ],
  },
  {
    title: "7. Children's Privacy",
    paragraphs: [
      "BKTCG events may be family-friendly, but this website is not intended to collect personal information directly from children under 13. If you believe a child has submitted personal information, contact us so we can review the request.",
    ],
  },
  {
    title: "8. Your Choices and Requests",
    paragraphs: [
      "You may contact us to ask about information you have submitted through BKTCG's own website forms, or to request correction or deletion where applicable. We may need to verify your request, and some information may need to be retained for legitimate or legal reasons.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy as our website, event services, or legal requirements change. The effective date shown above indicates when this version was last updated.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-4 py-16 text-[#2A1E68] sm:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header data-page-motion="header" className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6B52D9]">BKTCG Show</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[#2A1E68]/60">Effective date: October 30, 2026</p>
        </header>
        <article className="rounded-3xl border border-[#A78BFA]/40 bg-white/95 p-6 shadow-[0_0_28px_rgba(139,92,246,0.13)] sm:p-10">
          <p data-page-motion="reveal" className="leading-7 text-[#2A1E68]/80">
            This Privacy Policy explains how BKTCG Show ("BKTCG," "we," "us") handles information associated with our website and online inquiries. It does not replace the privacy policies of ticketing, social media, or other third-party services.
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
              <h2 className="text-xl font-black sm:text-2xl">10. Contact Us</h2>
              <p className="mt-3 leading-7 text-[#2A1E68]/75">
                Questions about this policy or information submitted through our website? Email{" "}
                <a className="font-bold text-[#5B2DB8] underline underline-offset-2" href="mailto:bktcgshow@gmail.com">bktcgshow@gmail.com</a>.
              </p>
            </section>
          </div>
        </article>
        <div data-page-motion="reveal" className="mt-8 text-center text-sm font-semibold">
          <Link to="/terms" className="text-[#5B2DB8] underline underline-offset-4 hover:text-[#2A1E68]">Read our Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}
