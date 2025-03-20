"use client";

import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center">
      <Image
        src="/careers-hero.jpg"
        alt="Healthcare professionals working together"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-blue-950/70" />
      <div className="relative container mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-xl max-w-2xl">
          Build a rewarding career in healthcare with opportunities for growth and development
        </p>
      </div>
    </section>
  );
}