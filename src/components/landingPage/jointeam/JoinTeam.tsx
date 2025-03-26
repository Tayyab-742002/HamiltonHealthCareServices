"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function JoinTeam() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="relative py-10 md:py-16 bg-white" data-aos="fade-up">
      {/* Cards Section */}
      <div
        className="relative py-10 md:py-16 bg-cover bg-center min-h-[30rem] flex items-center justify-center mb-16"
        style={{
          backgroundImage: `url('/hero-image.jpg')`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-center items-center">
          {/* Cards Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center">
            {/* Who We Hire Section */}
            <div className="bg-cyan-700 p-6 rounded-lg text-white shadow-lg flex flex-col w-full max-w-[350px] transform transition-all duration-300 hover:scale-105">
              <p className="text-sm uppercase opacity-80">About Hamilton</p>
              <h2 className="text-3xl font-bold mb-3">What We Do</h2>
              <p className="text-lg opacity-90 mb-5 flex-grow">
                Hamilton employs healthcare workers from a variety of
                patient-facing backgrounds.
              </p>
              <Button className="w-full bg-white text-cyan-700 hover:bg-gray-200 text-lg py-3 transition-colors duration-300">
                <a href="/who-we-hire/">Learn More</a>
              </Button>
            </div>

            {/* Current Opportunities Section */}
            <div className="bg-cyan-700 p-6 rounded-lg text-white shadow-lg flex flex-col w-full max-w-[350px] transform transition-all duration-300 hover:scale-105">
              <p className="text-sm uppercase opacity-80">Join Our Team</p>
              <h2 className="text-3xl font-bold mb-3">Current Opportunities</h2>
              <p className="text-lg opacity-90 mb-5 flex-grow"></p>
              <Button className="w-full bg-white text-cyan-700 hover:bg-gray-200 text-lg py-3 transition-colors duration-300">
                <a
                  href="https://recruiting.ultipro.ca/BAY5100BYHC/JobBoard/c921bbcc-c132-45c9-86e9-3d15aa0bca3a/?q=&o=postedDateDesc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find a Job
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section with Enhanced Styling */}
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="max-w-5xl mx-auto">
          {/* Video Container with Enhanced Effects */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
            {/* Video Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-pulse"></div>

            {/* Video Wrapper */}
            <div className="aspect-w-16 aspect-h-9 relative z-10 cursor-pointer">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-2xl"
                controls
                preload="metadata"
                poster="/services-hero.jpg"
                style={{
                  boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)",
                }}
              >
                <source src="/recruite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-20"></div>
          </div>

          {/* Enhanced Caption Section */}
          <div className="mt-8 text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-3xl font-bold  mb-3 text-dark-blue">
              Join Our Healthcare Team
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover why healthcare professionals choose to work with us and
              be part of something meaningful
            </p>
          </div>

          {/* Optional: Call-to-Action Button */}
          {/* <div className="mt-6 text-center">
            <Button
              className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Learn More About Our Culture
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
