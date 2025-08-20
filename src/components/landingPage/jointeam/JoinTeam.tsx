"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/shared/VideoPlayer";

export default function JoinTeam() {
  return (
    <section
      className="relative py-10 md:py-16 bg-gradient-to-b from-white via-gray-50 to-white"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* What We Do Card and Video */}
        <div className="max-w-[380px] mx-auto mb-24">
          {/* What We Do Card */}
          <div className="bg-gradient-to-br from-cyan-700 to-cyan-800 p-8 rounded-xl text-white shadow-2xl flex flex-col w-full transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 mb-12">
            <p className="text-sm uppercase tracking-wider opacity-80">
              About Hamilton
            </p>
            <h2 className="text-3xl font-bold mb-4 mt-2">What We Do</h2>
            <p className="text-lg opacity-90 mb-6 flex-grow">
              Hamilton employs healthcare workers from a variety of
              patient-facing backgrounds.
            </p>
            <Button className="w-full bg-white text-cyan-700 hover:bg-gray-100 text-lg py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              <a href="/about" className="flex items-center justify-center">
                Learn More
                <span className="ml-2">→</span>
              </a>
            </Button>
          </div>

          {/* What We Do Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(8,_112,_184,_0.4)] transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
            <VideoPlayer
              src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/whatwedo.mp4"
              poster="/services-hero.jpg"
              title="What We Do"
              className="aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-20"></div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm italic">
            Discover how Hamilton Healthcare Services is making a difference in
            healthcare
          </p>
        </div>

        {/* Current Opportunities Card and Video */}
        <div className="max-w-[380px] mx-auto">
          {/* Current Opportunities Card */}
          <div className="bg-gradient-to-br from-cyan-700 to-cyan-800 p-8 rounded-xl text-white shadow-2xl flex flex-col w-full transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 mb-12">
            <p className="text-sm uppercase tracking-wider opacity-80">
              Join Our Team
            </p>
            <h2 className="text-3xl font-bold mb-4 mt-2">
              Current Opportunities
            </h2>
            <p className="text-lg opacity-90 mb-6 flex-grow">
              Explore exciting career opportunities and be part of our growing
              healthcare team.
            </p>
            <Button className="w-full bg-white text-cyan-700 hover:bg-gray-100 text-lg py-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              <a
                href="/careers"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Find a Job
                <span className="ml-2">→</span>
              </a>
            </Button>
          </div>

          {/* Current Opportunities Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(8,_112,_184,_0.4)] transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(8,_112,_184,_0.3)]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>
            <VideoPlayer
              src="https://pub-20f982007aa54df4849bcd969b89a1bf.r2.dev/recruite.mp4"
              poster="/recruite-poster.jpg"
              title="Join Our Team"
              className="aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-20"></div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm italic">
            Join our team and be part of something meaningful
          </p>
        </div>
      </div>
    </section>
  );
}
