import { Navbar } from "@/components/layouts/navbar/navbar";
import { Footer } from "@/components/layouts/footer/Footer";
import ContactHero from "@/components/features/contact/hero/ContactHero";
import ContactForm from "@/components/features/contact/form/ContactForm";
import OfficeLocations from "@/components/features/contact/locations/OfficeLocations";
import ContactInfo from "@/components/features/contact/info/ContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <OfficeLocations />
      </main>
      <Footer />
    </div>
  );
}