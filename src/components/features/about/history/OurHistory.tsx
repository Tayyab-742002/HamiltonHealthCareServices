"use client";

import Image from "next/image";

export default function OurHistory() {
  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about-hero.jpg" // You'll need to add this image
              alt="Our journey through the years"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Our History</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Since our establishment in 1993, we've been at the forefront of healthcare staffing,
                growing from a small local agency to a leading healthcare staffing provider across
                multiple regions.
              </p>
              <p className="text-gray-700">
                Over the past 30 years, we've built strong relationships with healthcare facilities
                and professionals, maintaining our commitment to quality care and professional excellence.
              </p>
              <p className="text-gray-700">
                Today, we continue to evolve and adapt to the changing healthcare landscape,
                embracing new technologies and methodologies while staying true to our core values
                and mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
