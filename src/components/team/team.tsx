"use client";

export default function TeamSection() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Our Team Has What You're Looking For
        </h2>

        {/* Paragraphs */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Most of our client healthcare facilities work with us as a
            just-in-time partner, with Census being able to mobilize staff at a
            moment's notice. We have specially designed our services in response
            to this urgency and take the staffing worry away from our clients.
            We specialize in same-day staffing requests to cover your urgent
            staffing needs such as managing sick calls and changes in patient
            census.
          </p>
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Our reputation of quality is enhanced by the dedication of our
            people and the relationships we build. We are committed to ensuring
            employees with tested and relevant work and clients with quality
            staff. Our “temporary” staffing with Joint Accreditation Canada is a
            testament to the fact that we uphold the same hiring standards and
            patient care delivery as the facilities in which we serve.
          </p>

          {/* Call-to-action link */}
          <div>
            <a
              href="#"
              className="inline-block text-blue-600 font-semibold hover:underline"
            >
              About Us &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
