"use client";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Experience & Expertise",
      description: "Over 30 years of experience in healthcare staffing and personal care services"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous screening and continuous quality monitoring processes"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock availability for all your staffing and care needs"
    },
    {
      title: "Customized Solutions",
      description: "Tailored services to meet your specific requirements and preferences"
    }
  ];

  return (
    <section className="py-16 bg-blue-950 text-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}