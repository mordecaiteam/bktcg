import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

function TreasureProfile() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const sendHostViewport = () => {
      iframe.contentWindow?.postMessage(
        { type: "treasure:host-viewport", height: window.innerHeight },
        "https://www.ontreasure.com"
      );
    };

    const handleMessage = (event) => {
      if (
        event.origin !== "https://www.ontreasure.com" ||
        event.source !== iframe.contentWindow ||
        !event.data ||
        typeof event.data !== "object"
      ) return;

      if (
        event.data.iframeId === "treasure-embed-profile-bktcgshow" &&
        event.data.height
      ) {
        const height = parseInt(event.data.height, 10);
        if (Number.isFinite(height)) {
          iframe.style.height =
            window.innerWidth >= 1024 ? "650px" : `${Math.max(height, 10)}px`;
        }
      }

      if (event.data.type === "treasure:request-host-viewport") {
        sendHostViewport();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) iframe.style.height = "650px";
      sendHostViewport();
    };

    iframe.addEventListener("load", sendHostViewport);
    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", handleResize);

    return () => {
      iframe.removeEventListener("load", sendHostViewport);
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#F5F2FF] via-[#F1F0FF] to-[#EDF5FF] px-4 py-16 text-[#2A1E68] sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14">
          {/* LEFT: SECTION INFORMATION */}
          <div className="text-center lg:text-left">
            <p className="font-bold uppercase tracking-widest text-[#B46B00]">
              Upcoming Shows
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Find BKTCG
              <span className="block text-[#5B2DB8]">On Treasure</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2A1E68]/70 lg:mx-0">
              Discover upcoming BKTCG events, explore show details,
              purchase tickets, and find vendor opportunities directly
              through Treasure.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://www.ontreasure.com/u/bktcgshow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2A1E68] px-7 py-3 font-bold text-white shadow-[0_8px_24px_rgba(91,45,184,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#35267F] hover:shadow-[0_10px_28px_rgba(91,45,184,0.35)]"
              >
                View Our Treasure Profile
                <ExternalLink size={16} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* RIGHT: TREASURE EMBED */}
          <div className="min-w-0">
            <div className="rounded-3xl border border-[#A78BFA]/50 bg-white/90 p-2 shadow-[0_0_22px_rgba(139,92,246,0.18)] transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(139,92,246,0.3)] md:p-4">
              <div className="overflow-hidden rounded-2xl bg-white lg:h-[650px]">
                <iframe
                  ref={iframeRef}
                  id="treasure-embed-profile-bktcgshow"
                  src="https://www.ontreasure.com/u/bktcgshow/embed?iframeId=treasure-embed-profile-bktcgshow"
                  title="BKTCG Treasure Profile"
                  loading="lazy"
                  allow="fullscreen; payment"
                  sandbox="allow-same-origin allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox"
                  className="h-[500px] w-full rounded-2xl border-0 lg:h-[650px]"
                  style={{ padding: 0 }}
                />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-[#2A1E68]/50">
              Event information powered by Treasure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreasureProfile;
