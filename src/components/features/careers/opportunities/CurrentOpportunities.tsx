"use client";

import { Button } from "@/components/ui/button";

export default function CurrentOpportunities() {
  const positions = [
    {
      title: "Registered Nurses",
      type: "Full-time / Part-time",
      location: "Multiple Locations",
    },
    {
      title: "Licensed Practical Nurses",
      type: "Full-time / Part-time",
      location: "Multiple Locations",
    },
    {
      title: "Personal Support Workers",
      type: "Full-time / Part-time",
      location: "Multiple Locations",
    },
    {
      title: "Healthcare Administrators",
      type: "Full-time",
      location: "Toronto, ON",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Current Opportunities
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-950">
                  {position.title}
                </h3>
                <div className="mt-2 space-y-1 text-gray-600">
                  <p>{position.type}</p>
                  <p>{position.location}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="mt-12 text-center">
            <Button
              className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-6 text-lg"
              onClick={() =>
                window.open(
                  "https://recruiting.ultipro.ca/BAY5100BYHC/JobBoard/c921bbcc-c132-45c9-86e9-3d15aa0bca3a/?q=&o=postedDateDesc",
                  "_blank"
                )
              }
            >
              View All Opportunities
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
