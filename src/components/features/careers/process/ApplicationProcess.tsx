"use client";

export default function ApplicationProcess() {
  const steps = [
    {
      number: "1",
      title: "Browse Opportunities",
      description: "Search through our current openings to find the right position for you",
    },
    {
      number: "2",
      title: "Submit Application",
      description: "Complete our online application form and upload your resume",
    },
    {
      number: "3",
      title: "Interview Process",
      description: "Meet with our team to discuss your experience and career goals",
    },
    {
      number: "4",
      title: "Join Our Team",
      description: "Complete onboarding and start your journey with us",
    },
  ];

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Application Process
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-950 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}