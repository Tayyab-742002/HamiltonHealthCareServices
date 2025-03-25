import CounterSection from "@/components/landingPage/counter/counter";
import DifferentSection from "@/components/landingPage/different/different";
import HeroSection from "@/components/landingPage/hero/hero";

import TeamSection from "@/components/landingPage/team/team";
import HelpingHealthcareCarousel from "@/components/landingPage/testimonials/Testimonials";
import JoinTeam from "@/components/landingPage/jointeam/JoinTeam";
import WhereWeHire from "@/components/landingPage/whoweserve/WhoWeServe";
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
