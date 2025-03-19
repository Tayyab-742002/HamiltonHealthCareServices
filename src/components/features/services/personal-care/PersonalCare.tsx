"use client";

import { Button } from "@/components/ui/button";

export default function PersonalCare() {
  const services = [
    {
      title: "Personal Hygiene",
      description: "Assistance with bathing, grooming, and dressing"
    },
    {
      title: "Mobility Support",
      description: "Help with walking, transfers, and positioning"
    },
    {
      title: "Medication Management",
      description: "Reminders and assistance with medications"
    },
    {
      title: "Meal Preparation",
      description: "Nutritious meal planning and preparation"
    },
    {
      title: "Light Housekeeping",
      description: "Maintaining a clean and safe environment"
    },
    {
      title: "Companionship",
      description: "Social interaction and emotional support"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Personal Care Services
          </h2>
          <p className="text-lg text-gray-700">
            Our dedicated caregivers provide compassionate personal care services
            tailored to your unique needs, helping you maintain independence and
            quality of life in the comfort of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-950 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-6 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}