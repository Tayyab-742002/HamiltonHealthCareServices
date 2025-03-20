"use client";

export default function SpecializedCare() {
  const specializedServices = [
    {
      title: "Palliative Care",
      description: "Specialized support for individuals with serious illnesses, focusing on comfort and quality of life."
    },
    {
      title: "Dementia Care",
      description: "Specialized care for individuals with Alzheimer's and other forms of dementia."
    },
    {
      title: "Post-Surgery Care",
      description: "Recovery support and rehabilitation assistance after surgical procedures."
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing support for managing chronic conditions and maintaining optimal health."
    }
  ];

  return (
    <section className=" bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Specialized Care Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specializedServices.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-950 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
