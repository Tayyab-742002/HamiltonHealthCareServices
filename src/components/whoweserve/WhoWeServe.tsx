"use client";

import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    name: "Ontario",
    image: "/ontario.jpg",
    alt: "Two healthcare colleagues talking on the stairs at hospital",
    link: "#",
  },
  {
    name: "Nova Scotia",
    image: "/Nova_Scotia.jpg",
    alt: "Female nurse tending to male patient in hospital bed",
    link: "#",
  },
  {
    name: "Prince Edward Island",
    image: "/Prince_Edward_Island.jpg",
    alt: "Smiling nurse holding medical record",
    link: "#",
  },
];

export default function WhereWeHire() {
  return (
    <section className="bg-light py-16 text-center" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-black mb-8">
          Where We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Link key={index} href={location.link} className="block group  ">
              <div className="relative overflow-hidden  shadow-lg">
                <Image
                  src={location.image}
                  alt={location.alt}
                  width={600}
                  height={400}
                  className="w-full h-[320px]  object-cover transition-transform "
                />
                <div className="absolute inset-x-0 bottom-0 bg-white  bg-opacity-80 p-4 text-left translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ">
                  <h3 className=" font-semibold text-black relative text-2xl ">
                    {location.name}
                    <span className="block text-lg text-blue-600 font-medium   opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                      Learn More →
                    </span>
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
