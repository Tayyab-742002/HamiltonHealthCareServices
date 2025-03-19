"use client";

export default function StaffingServices() {
  const services = [
    {
      title: "Healthcare Facility Staffing",
      description: "Providing qualified healthcare professionals to hospitals, clinics, and long-term care facilities.",
      features: ["24/7 staffing support", "Verified credentials", "Flexible scheduling"]
    },
    {
      title: "Temporary Staffing",
      description: "Short-term staffing solutions to cover leaves, vacations, and peak periods.",
      features: ["Quick response time", "Qualified professionals", "Seamless integration"]
    },
    {
      title: "Permanent Placement",
      description: "Finding the perfect long-term match for your healthcare facility.",
      features: ["Thorough screening", "Cultural fit assessment", "Ongoing support"]
    },
    {
      title: "Crisis Staffing",
      description: "Emergency staffing solutions when you need them most.",
      features: ["Rapid deployment", "Experienced professionals", "24/7 availability"]
    }
  ];

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Healthcare Staffing Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-950 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}