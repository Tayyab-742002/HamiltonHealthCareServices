"use client";

import { Button } from "@/components/ui/button";

export default function DementiaCare() {
  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#E85C0D] mb-6">
                Dementia and Alzheimer’s Care at Home
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
                A diagnosis of Dementia or Alzheimers is life changing for both
                the individual with the disease and their family and loved ones.
                Providing care for someone living with this disease is not a
                simple task and can place a great deal of stress on the
                caregiver. In the early stages of dementia, the individual may
                feel everything is under control but as the disease progresses
                so does the degree of care sometimes even leading to 24/7
                assistance.
                <br /> <br />
                Dementia is an overall term used to describe various brain
                disorders caused by physical changes in the brain. The changes
                in the brain occur due to loss of cells and the breakdown of
                important nerve connections. It is a progressive disorder severe
                enough to interfere with life every day and prevent and slow
                down daily activities.
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
