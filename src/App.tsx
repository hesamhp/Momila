import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import Countdown from "./components/Countdown";
import CTA from "./components/CTA";
import Customers from "./components/Customers";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Story from "./components/Story";
import Testimonials from "./components/Testimonials";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="min-h-screen overflow-x-clip bg-lilac-25 font-sans text-ink">
      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      <ScrollProgress />

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Customers />
            <Story />
            <Features />
            <Testimonials />
            <FAQ />
            <Countdown />
            <CTA />
          </main>
          <Footer />
        </>
      )}

      <BackToTop />
    </div>
  );
}
