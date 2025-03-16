import CounterSection from "@/components/counter/counter";
import DifferentSection from "@/components/different/different";
import HeroSection from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import TeamSection from "@/components/team/team";
import HelpingHealthcareCarousel from "@/components/testimonials/Testimonials";
import JoinTeam from "@/components/jointeam/JoinTeam";
import WhereWeHire from "@/components/whowehire/WhoWeHire";
import {Footer} from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <CounterSection />
        <TeamSection />
        <JoinTeam />
        <HelpingHealthcareCarousel />
        <WhereWeHire />
        {/* <DifferentSection /> */}
        <Footer />
      </main>
    </div>
  );
}
