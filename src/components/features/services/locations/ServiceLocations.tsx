"use client";

export default function ServiceLocations() {
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Where We Serve
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We provide our services across multiple locations, ensuring quality
            healthcare staffing and personal care services are accessible to those
            who need them.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {[
              "Toronto",
              "Ottawa",
              "Vancouver",
              "Calgary",
              "Montreal",
              "Halifax"
            ].map((location) => (
              <div
                key={location}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}