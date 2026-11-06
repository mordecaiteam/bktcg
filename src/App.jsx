import { lazy, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
import PageAnimations from "./components/PageAnimations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Events = lazy(() => import("./pages/Events"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const SponsorThankYou = lazy(() => import("./pages/SponsorThankYou"));

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Suspense fallback={<LoadingScreen />}>
      <PageAnimations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/sponsor-thank-you" element={<SponsorThankYou />} />
      </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}

export default App;