import { Navbar } from "@/components/layouts/navbar/navbar";
import { Footer } from "@/components/layouts/footer/Footer";
import ReferralHero from "@/components/features/referral/hero/ReferralHero";
import ReferralProgram from "@/components/features/referral/program/ReferralProgram";

export default function ReferralProgramPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ReferralHero />
        <ReferralProgram />
      </main>
      <Footer />
    </div>
  );
}