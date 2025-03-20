import { Navbar } from "@/components/layouts/navbar/navbar";
import { Footer } from "@/components/layouts/footer/Footer";
import CareersHero from "@/components/features/careers/hero/CareersHero";
import WhyJoinUs from "@/components/features/careers/why-join/WhyJoinUs";
import CurrentOpportunities from "@/components/features/careers/opportunities/CurrentOpportunities";
import ApplicationProcess from "@/components/features/careers/process/ApplicationProcess";

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CareersHero />
        <WhyJoinUs />
        <CurrentOpportunities />
        <ApplicationProcess />
      </main>
      <Footer />
    </div>
  );
}