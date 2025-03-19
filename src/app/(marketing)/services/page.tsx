import { Navbar } from "@/components/layouts/navbar/navbar";
import { Footer } from "@/components/layouts/footer/Footer";
import ServicesHero from "@/components/features/services/hero/ServicesHero";
import StaffingServices from "@/components/features/services/staffing/StaffingServices";
import PersonalCare from "@/components/features/services/personal-care/PersonalCare";
import SpecializedCare from "@/components/features/services/specialized/SpecializedCare";
import ServiceLocations from "@/components/features/services/locations/ServiceLocations";
import WhyChooseUs from "@/components/features/services/why-choose/WhyChooseUs";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesHero />
        <StaffingServices />
        <PersonalCare />
        <SpecializedCare />
        <ServiceLocations />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}