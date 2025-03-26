"use client";

export default function WhyJoinUs() {
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Excellent pay rates and comprehensive benefits package",
      icon: "💰",
    },
    {
      title: "Flexible Scheduling",
      description: "Work-life balance with shifts that fit your lifestyle",
      icon: "📅",
    },
    {
      title: "Professional Development",
      description: "Ongoing training and career advancement opportunities",
      icon: "📚",
    },
    {
      title: "Supportive Environment",
      description: "Join a team that values and supports your growth",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-10 sm:py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-8 mx-0 sm:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 text-center mb-6 sm:mb-12">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

