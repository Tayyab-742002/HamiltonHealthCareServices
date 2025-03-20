"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full h-[400px] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-main.jpg"
        alt="Group of healthcare professionals"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-transparent z-20" />

      {/* Main Content */}
      <div className="relative z-30 container mx-auto flex flex-col lg:flex-row items-center px-6 md:px-16 lg:px-24 py-12 md:py-20">
        {/* Text Content */}
        <div className=" text-left lg:text-left max-w-2xl">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Placements to
            <br />
            suit your
            <br />
            personal and
            <br />
            professional
            <br />
            needs
          </h1> */}
          <p className="mt-4 text-white/90 text-lg sm:text-xl">
            Over 30 years of providing trusted healthcare support to private
            homes and healthcare facilities.
          </p>

          {/* Updated Button */}
          <div className="mt-6 flex justify-start">
            <Link href="/about">
              <Button className="bg-white text-black text-lg cursor-pointer px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
