"use client";

export default function OurValues() {
  const values = [
    {
      title: "Excellence",
      description: "Maintaining the highest standards in healthcare staffing and service delivery",
      icon: "🎯",
    },
    {
      title: "Integrity",
      description: "Operating with transparency and ethical principles in all our relationships",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "Continuously improving our processes and embracing new healthcare solutions",
      icon: "💡",
    },
    {
      title: "Care",
      description: "Putting people first - both our staff and the patients they serve",
      icon: "❤️",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-blue-950 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}