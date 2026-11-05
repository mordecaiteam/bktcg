import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SponsorThankYou from "./pages/SponsorThankYou";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

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

      <Footer />
    </BrowserRouter>
  );
}

export default App;