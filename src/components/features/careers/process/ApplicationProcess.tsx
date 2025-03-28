"use client";

export default function ApplicationProcess() {
  const steps = [
    {
      number: "1",
      title: "Submit Application",
      description: " Send your resume/cv to our HR team.",
    },
    {
      number: "2",
      title: "Interview Process",
      description:
        "Meet with our team to discuss your experience and career goals.",
    },
    {
      number: "3",
      title: "Join Our Team",
      description: "Complete onboarding and start your journey with us.",
    },
  ];

  return (
    <section
      className="py-16 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mx-4"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Application Process
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Added Application Instructions */}
          <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-blue-50 rounded-xl mx-2 sm:mx-0">
            <p className="text-base sm:text-lg font-semibold text-blue-950 px-2 sm:px-0">
              To apply candidates should send their resume/cv to:
            </p>
            <a
              href="mailto:careers@hamiltonhealthcareservices.com"
              className="text-sm sm:text-md text-dark-blue underline hover:text-blue-800 font-bold mt-2 block break-words px-2 sm:px-0"
            >
              careers@hamiltonhealthcareservices.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


