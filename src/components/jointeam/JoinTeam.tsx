"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function JoinTeam() {
  return (
    <section
      className="relative py-10 md:py-16 bg-cover bg-center min-h-[30rem] flex items-center justify-center"
      style={{
        backgroundImage: `url('/hero-image.jpg')`,
        backgroundPosition: "center 30%",
      }}
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6 flex justify-center items-center">
        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center">
          {/* Who We Hire Section */}
          <div
            className="bg-cyan-700 p-6 rounded-lg text-white shadow-lg flex flex-col
             w-full max-w-[350px] "
          >
            <p className="text-sm uppercase opacity-80">About Carecor</p>
            <h2 className="text-3xl font-bold mb-3">Who We Hire</h2>
            <p className="text-lg opacity-90 mb-5 flex-grow">
              Carecor employs healthcare workers from a variety of
              patient-facing backgrounds.
            </p>
            <Button className="w-full bg-white text-cyan-700 hover:bg-gray-200 text-lg py-3">
              <a href="/who-we-hire/">Learn More</a>
            </Button>
          </div>

          {/* Current Opportunities Section */}
          <div
            className="bg-cyan-700 p-6 rounded-lg text-white shadow-lg flex flex-col
            w-full max-w-[350px]  "
          >
            <p className="text-sm uppercase opacity-80">Join Our Team</p>
            <h2 className="text-3xl font-bold mb-3">Current Opportunities</h2>
            <p className="text-lg opacity-90 mb-5 flex-grow"></p>
            <Button className="w-full bg-white text-cyan-700 hover:bg-gray-200 text-lg py-3">
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
    </section>
  );
}
