import { useNavigate } from "react-router-dom";

import gmailLogo from "../assets/misc/gmail_logo.svg";
import instagramLogo from "../assets/misc/ig_logo.svg";
import tiktokLogo from "../assets/misc/tiktok_logo.svg";

function ContactUs() {
  const navigate = useNavigate();

  const inputClasses =
    "rounded-xl border border-white/15 bg-white/10 px-6 py-5 text-white outline-none backdrop-blur-md placeholder:text-white/50 transition focus:border-[#FFA500] focus:bg-white/15";

  // Submit form to Netlify
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        form.reset();
        navigate("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#0B1D5A] via-[#2A1E68] to-[#5B2DB8] px-6 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FFA500]/10 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-[#4FCBFF]/10 blur-[120px]" />

      <section className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Left: Contact Form */}
        <div>
          <p className="font-bold uppercase tracking-[0.35em] text-[#FFA500]">
            Get In Touch
          </p>

          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Contact Us & Meet Our Team
            <span className="text-[#4FCBFF]">!</span>
          </h1>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="mt-14 space-y-6"
          >
            {/* Required for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid gap-6 md:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className={inputClasses}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className={inputClasses}
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className={inputClasses}
              />

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className={inputClasses}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write Message..."
              rows="6"
              className={`${inputClasses} w-full`}
              required
            />

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-[#FFA500] to-[#FFD24A] px-8 py-4 font-black text-[#0B1D5A] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,.45)]"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* Right: Contact Information */}
        <div>
          <p className="font-bold uppercase tracking-[0.35em] text-[#FFA500]">
            Information
          </p>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Contact Information
            <span className="text-[#4FCBFF]">!</span>
          </h2>

          <div className="mt-14 space-y-4">
            {/* Email */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <img
                    src={gmailLogo}
                    alt="Email"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#FFA500]">
                    Email
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Send us a message directly.
                  </p>

                  <p className="mt-2 font-semibold text-[#4FCBFF]">
                    bktcgshow@gmail.com
                  </p>

                  <a
                    href="mailto:bktcgshow@gmail.com"
                    className="mt-4 inline-block rounded-xl bg-[#2A1E68] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#35267F]"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <img
                    src={instagramLogo}
                    alt="Instagram"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#FFA500]">
                    Instagram
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Follow show updates, announcements, and event posts.
                  </p>

                  <p className="mt-2 font-semibold text-[#4FCBFF]">
                    @bktcgshow
                  </p>

                  <a
                    href="https://www.instagram.com/bktcgshow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-xl bg-[#2A1E68] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#35267F]"
                  >
                    Open Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* TikTok */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <img
                    src={tiktokLogo}
                    alt="TikTok"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#FFA500]">
                    TikTok
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    Check out event clips and BKTCG content.
                  </p>

                  <p className="mt-2 font-semibold text-[#4FCBFF]">
                    @bktcgshow
                  </p>

                  <a
                    href="https://www.tiktok.com/@bktcgshow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-xl bg-[#2A1E68] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#35267F]"
                  >
                    Open TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;