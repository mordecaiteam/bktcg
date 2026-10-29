import Hero from "../components/home/Hero";
import TreasureProfile from "../components/home/TreasureProfile";
import FeaturedGames from "../components/home/FeaturedGames";
import EventHighlights from "../components/home/EventHighlights";
import FeatureCards from "../components/home/FeatureCards";
import CTASection from "../components/home/CTASection";

function Home() {
  return (
    <main className="bg-[#2A1E68]">
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