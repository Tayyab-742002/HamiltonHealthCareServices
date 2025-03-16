"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full h-[400px] lg:h-screen overflow-hidden">
      <Image
        src="/hero-image.jpg"
        alt="Group of healthcare professionals"
        fill
        className="object-cover"
      />

      {/* Gradient Overlay Covering the Entire Section */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-transparent z-20" />

      {/* Main content container */}
      <div className="relative z-60 container mx-auto flex flex-col md:flex-row items-center px-40 py-16 md:py-24">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-5xl md:text-8xl text-white">
            The Best-in-Class
            <br />
            HealthcareStaffing
            <br />
            Agency
          </h1>
          <p className="mt-4 text-white/90">
            Over 35 years as a trusted support to large and small healthcare
            facilities
          </p>
          <div className="mt-6 flex justify-start">
            <Button variant="default">About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
