"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center">
      <Image
        src="/about-hero.jpg"
        alt="Healthcare professionals providing care"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-blue-950/70" />
      <div className="relative container mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl max-w-2xl">
          Over three decades of excellence in healthcare staffing and support
          services
        </p>
      </div>
    </section>
  );
}
