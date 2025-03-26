"use client";

import { Button } from "@/components/ui/button";
import ImmigrationProgram from "./ImmigrationProgram";

export default function CurrentOpportunities() {
  const positions = [
    {
      title: "Caregivers(Domestic/Overseas)",
      type: "Full-time",
      location: "Multiple Locations",
    },
    {
      title: "Licensed Practical Nurses",
      type: "Full-time / Part-time",
      location: "Multiple Locations",
    },
  ];

  return (
    <section className="py-10 sm:py-20 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-16">
          {/* Current Opportunities Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-8 mx-0 sm:mx-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 text-center mb-6 sm:mb-12">
              Current Opportunities
            </h2>
            <div className="grid gap-4 sm:gap-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 sm:p-8 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-blue-950 mb-4">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-50 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                      {position.type}
                    </span>
                    <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white text-gray-700 rounded-full text-xs sm:text-sm font-medium">
                      {position.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Immigration Program Section */}
          <ImmigrationProgram />
        </div>
      </div>
    </section>
  );
}


