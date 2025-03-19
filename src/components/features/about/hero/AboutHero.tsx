"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative flex items-center justify-center w-full h-[400px] lg:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about-hero.jpg" // You'll need to add this image to your public folder
        alt="Healthcare professionals in a meeting"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/80 to-blue-950/70" />

      {/* Main Content */}
      <div className="relative z-30 container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          About Us
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Over three decades of excellence in healthcare staffing and support services
        </p>
      </div>
    </section>
  );
}