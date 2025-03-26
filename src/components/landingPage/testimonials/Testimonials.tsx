"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah",
    role: "Healthcare Professional",
    image: "/test1.jpg",
    quote:
      "Working at Hamilton Healthcare has been an incredibly rewarding experience. The team is supportive, and I feel valued for the work I do every day. Helping clients maintain their independence and seeing the impact I make in their lives is truly fulfilling. I couldn't ask for a better place to grow as a caregiver!",
    link: "",
  },
  {
    name: "Justine",
    role: "Healthcare Professional",
    image: "/test2.jpg",
    quote:
      "Hamilton Healthcare has given me the opportunity to do what I love—caring for others. The flexible scheduling and professional support make my job easier, and I always feel appreciated. It's more than just a job; it's a place where I get to make a difference in people's lives every day.",
    link: "",
  },
  {
    name: "Matilda",
    role: "Caregiver",
    image: "/test3.jpg",
    quote:
      "Being a caregiver at Hamilton Healthcare has been an amazing journey. The company truly values its staff, providing ongoing training and a positive work environment. Knowing that I'm making a real difference in my clients' lives gives me a deep sense of fulfillment and purpose.",
    link: "",
  },
  {
    name: "Emily",
    role: "Healthcare Professional",
    image: "/test4.jpg",
    quote:
      "Working with Hamilton Healthcare has been one of the best decisions of my career. The management is supportive, and the clients are wonderful. Every day brings new experiences, and I leave my shifts feeling proud of the care I provide. It's a fulfilling and meaningful career, and I'm grateful to be part of this team!",
    link: "",
  },
  {
    name: "Anthony",
    role: "Healthcare Professional",
    image: "/test5.jpg",
    quote:
      "Joining Hamilton Healthcare has been life-changing. The support from the team and the strong sense of community make it more than just a job—it's a calling. Every day, I get to bring comfort and companionship to those in need, and that feeling is truly priceless. I'm proud to be part of such a compassionate organization.",
    link: "",
  },
];

// Custom arrow for the next (right) button
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      aria-label="Next"
      type="button"
      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer focus:border-2 focus:border-white focus:rounded-sm text-white"
    >
      <ChevronRight size={32} />
    </button>
  );
}

// Custom arrow for the previous (left) button
function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer focus:border-2 focus:border-white focus:rounded-sm z-10 text-white"
    >
      <ChevronLeft size={32} />
    </button>
  );
}

export default function HelpingHealthcareCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16 text-center" data-aos="fade-up">
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Helping Healthcare Workers Every Day
        </h2>
        <div className="bg-blue-950 rounded-lg py-10 px-6 relative">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="text-white text-center p-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-40 h-40 bg-cover bg-center rounded-full mb-4"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm opacity-80">{item.role}</p>
                  <p className="mt-4 italic max-w-md">"{item.quote}"</p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="mt-4 text-blue-300 hover:text-blue-400"
                  >
                    {/* <strong>Read More</strong> */}
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
