"use client";

export default function TeamSection() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-5xl md:text-4xl text-center font-semibold text-gray-900 mb-6">
          For Those Who Put People First
        </h2>

        {/* Paragraphs */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg text-gray-700 mb-4">
            We are proud to specialize in patient care staffing as it ensures a
            supportive, healthy, and safe workplace for our employees. With a
            sizable list of healthcare facility clients and even more diverse
            units to work on, you have the opportunity to advance your skills to
            the next level. Our placements enhance your breadth of knowledge and
            confidence as a healthcare professional.
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
