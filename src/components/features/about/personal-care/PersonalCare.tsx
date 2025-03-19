"use client";

import { Button } from "@/components/ui/button";

export default function PersonalCare() {
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold !text-yellow-600 mb-6">
                Personal Care Services
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                For personalized support tailored to your needs, our Personal
                Care services at Bayshore Home Health offer compassionate
                assistance with daily activities. Whether you require help with
                bathing, dressing, grooming, or mobility, our professional
                caregivers are dedicated to enhancing your comfort and
                well-being. Trust Bayshore for reliable, quality care that
                allows you to maintain your lifestyle with confidence.
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-6 text-lg"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
