import { Navbar } from "@/components/layouts/navbar/navbar";
import { Footer } from "@/components/layouts/footer/Footer";
import ServicesHero from "@/components/features/services/hero/ServicesHero";
import StaffingServices from "@/components/features/services/staffing/StaffingServices";
import PersonalCare from "@/components/features/services/personal-care/PersonalCare";
import MedicalCare from "@/components/features/services/medical-care/MedicalCare";
import DementiaCare from "@/components/features/services/dementia-care/DementiaCare";
import ServiceLocations from "@/components/features/services/locations/ServiceLocations";
import WhyChooseUs from "@/components/features/services/why-choose/WhyChooseUs";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesHero />
        <PersonalCare />
        <MedicalCare />
        <DementiaCare />
        <StaffingServices />
        <ServiceLocations />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
