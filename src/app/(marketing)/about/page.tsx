import { Navbar } from "@/components/layouts/navbar/navbar";
import AboutHero from "@/components/features/about/hero/AboutHero";
import OurMission from "@/components/features/about/mission/OurMission";
import OurValues from "@/components/features/about/values/OurValues";
import OurHistory from "@/components/features/about/history/OurHistory";

import { Footer } from "@/components/layouts/footer/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHero />

        <OurMission />
        <OurValues />
        <OurHistory />
      </main>
      <Footer />
    </div>
  );
}
