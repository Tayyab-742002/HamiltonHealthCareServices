"use client";

import { Button } from "@/components/ui/button";

export default function MedicalCare() {
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#E85C0D] mb-6">
                In-Home Nursing Services
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
                We provide a wide range of medical services tailored to meet
                your needs. Our experienced nurses and health care professionals
                will work with you to design a personalized care plan to help
                you recover from illness, injury or other medical conditions in
                the comfort of your home. In this section, you’ll find
                information about our medical services.
              </p>
              {/* <div className="flex justify-center">
                <Button
                  className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-6 text-lg"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact us for a free in-home consultation
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
