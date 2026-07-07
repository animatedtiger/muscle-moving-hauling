import fs from "node:fs";
import path from "node:path";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import ServiceArea from "@/components/ServiceArea";
import Stats from "@/components/Stats";
import Showcase from "@/components/Showcase";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
  // Check for responsive hero videos. Server-side so the client never
  // requests a missing file. HaulBackdrop renders as a live fallback.
  // Drop-in convention (do not rename): public/videos/hero-bg-desktop.mp4
  // and public/videos/hero-bg-mobile.mp4 — see README.md.
  const hasDesktopVideo = fs.existsSync(
    path.join(process.cwd(), "public", "videos", "hero-bg-desktop.mp4"),
  );
  const hasMobileVideo = fs.existsSync(
    path.join(process.cwd(), "public", "videos", "hero-bg-mobile.mp4"),
  );

  return (
    <main className="relative">
      <Nav />
      <Hero hasDesktopVideo={hasDesktopVideo} hasMobileVideo={hasMobileVideo} />
      <Marquee />
      <TrustStrip />
      <Services />
      <Pricing />
      <Comparison />
      <ServiceArea />
      <Stats />
      <Showcase />
      <Faq />
      <Contact />
      <Footer />
      <MobileCallBar />
    </main>
  );
}
