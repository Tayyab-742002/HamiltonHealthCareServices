"use client";

export default function ContactInfo() {
  const contactDetails = [
    {
      title: "24/7 Support",
      info: "1-800-123-4567",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Email Us",
      info: "info@carecor.com",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Business Hours",
      info: "Mon-Fri: 9AM - 5PM EST",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="text-blue-950 mr-4">{detail.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-950">{detail.title}</h3>
                <p className="text-gray-600">{detail.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}