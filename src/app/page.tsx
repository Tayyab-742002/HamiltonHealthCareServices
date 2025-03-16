import CounterSection from "@/components/counter/counter";
import DifferentSection from "@/components/different/different";
import HeroSection from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import TeamSection from "@/components/team/team";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <CounterSection />
        <TeamSection />
        <DifferentSection />
      </main>
    </div>
  );
}
