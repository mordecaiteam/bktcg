import { useEffect, useRef } from "react";
import Hero from "../components/home/Hero";
import TreasureProfile from "../components/home/TreasureProfile";
import FeaturedGames from "../components/home/FeaturedGames";
import EventHighlights from "../components/home/EventHighlights";
import FeatureCards from "../components/home/FeatureCards";
import CTASection from "../components/home/CTASection";

function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const home = homeRef.current;
    const targets = [...home.querySelectorAll("section:not(:first-child) > *")];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

    targets.forEach((target) => {
      target.classList.add("home-reveal");
      observer.observe(target);
    });
    const showAll = () => {
      if (motion.matches) {
        observer.disconnect();
        targets.forEach((target) => target.classList.add("is-revealed"));
      }
    };
    motion.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", showAll);
      targets.forEach((target) => target.classList.remove("home-reveal", "is-revealed"));
    };
  }, []);

  return (
    <main ref={homeRef} className="home-page bg-[#2A1E68]">
      <Hero />

      <TreasureProfile />

      <FeaturedGames />

      <EventHighlights />

      <FeatureCards />

      <CTASection />
    </main>
  );
}

export default Home;