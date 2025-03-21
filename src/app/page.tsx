import CounterSection from "@/components/counter/counter";
import DifferentSection from "@/components/different/different";
import HeroSection from "@/components/hero/hero";

import TeamSection from "@/components/team/team";
import HelpingHealthcareCarousel from "@/components/testimonials/Testimonials";
import JoinTeam from "@/components/jointeam/JoinTeam";
import WhereWeHire from "@/components/whoweserve/WhoWeServe";
import {Footer} from "@/components/layouts/footer/Footer";
import { Navbar } from "@/components/layouts/navbar/navbar";

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
