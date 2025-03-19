"use client";

export default function OfficeLocations() {
  const offices = [
    {
      city: "Toronto",
      address: "123 Healthcare Ave, Suite 200",
      postal: "Toronto, ON M5V 2T6",
      phone: "+1 (416) 555-0123",
      email: "toronto@carecor.com"
    },
    {
      city: "Ottawa",
      address: "456 Wellness Street, Floor 3",
      postal: "Ottawa, ON K1P 5M7",
      phone: "+1 (613) 555-0456",
      email: "ottawa@carecor.com"
    },
    {
      city: "Halifax",
      address: "789 Care Lane",
      postal: "Halifax, NS B3H 2Y9",
      phone: "+1 (902) 555-0789",
      email: "halifax@carecor.com"
    }
  ];

  return (
    <section className="py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">
          Our Office Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-950 mb-4">
                {office.city}
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>{office.address}</p>
                <p>{office.postal}</p>
                <p className="pt-2">{office.phone}</p>
                <p>{office.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}