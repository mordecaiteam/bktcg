import { useEffect, useId, useRef } from "react";

export default function TreasureVenueMap({ eventUrl, title = "BKTCG vendor map" }) {
  const iframeRef = useRef(null);
  const reactId = useId().replace(/[^a-zA-Z0-9-]/g, "");
  const iframeId = `treasure-embed-map-${reactId}`;
  const origin = "https://www.ontreasure.com";
  const url = new URL(eventUrl || origin);
  if (url.origin !== origin || !url.pathname.endsWith("/venue-map")) {
    return <p className="text-sm text-[#2A1E68]/70">Interactive floorplan is not available yet.</p>;
  }
  url.searchParams.set("iframeId", iframeId);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const sendViewport = () => iframe.contentWindow?.postMessage(
      { type: "treasure:host-viewport", height: window.innerHeight }, origin
    );
    const onMessage = (event) => {
      if (event.origin !== origin || event.source !== iframe.contentWindow || !event.data || typeof event.data !== "object") return;
      if (event.data.iframeId === iframeId && event.data.height != null) {
        const height = Number.parseInt(event.data.height, 10);
        if (Number.isFinite(height)) iframe.style.height = `${Math.max(300, Math.min(height, 5000))}px`;
      }
      if (event.data.type === "treasure:request-host-viewport") sendViewport();
    };
    iframe.addEventListener("load", sendViewport);
    window.addEventListener("message", onMessage);
    window.addEventListener("resize", sendViewport);
    return () => {
      iframe.removeEventListener("load", sendViewport);
      window.removeEventListener("message", onMessage);
      window.removeEventListener("resize", sendViewport);
    };
  }, [iframeId]);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#4FCBFF]/20 bg-white shadow-lg">
      <iframe ref={iframeRef} id={iframeId} src={url.toString()} title={title}
        loading="lazy" allow="fullscreen; payment"
        sandbox="allow-same-origin allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox"
        className="w-full border-0" style={{ height: 500, padding: 0 }} />
    </div>
  );
}
