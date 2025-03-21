"use client";

import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Gerby Malanay",
    role: "Staffing Office Supervisor",
    image: "/Gerby-Malanay.jpg",
    quote:
      "When the workers know we can help design their work schedule, it builds up a level of trust with us. That’s one of the advantages of working for Carecor; you get to pick the shifts and the dates you want to work.",
    link: "https://www.carecor.com/news/helping-healthcare-workers-every-day-gerby-malanay/",
  },
  {
    name: "Justine Hayashi",
    role: "Staffing Coordinator",
    image: "Justine.jpg",
    quote:
      "Sometimes we’ll get an email saying that a particular staff member was just fabulous on a unit, and of course we feel great because we helped place them there.",
    link: "https://www.carecor.com/news/helping-healthcare-workers-every-day-justine-hayashi/",
  },
  {
    name: "Jelen Calletor",
    role: "Staffing Coordinator",
    image: "/test1.jpg",
    quote:
      "They all have their commitments, and so it’s important for me to get to know them a little bit. I know when they have school and I know if they prefer night shifts because their partners are working during the day.",
    link: "https://www.carecor.com/news/helping-healthcare-workers-every-day-jelen-calletor/",
  },
  {
    name: "Tracy Scott",
    role: "Staffing Coordinator",
    image: "/test2.jpg",
    quote:
      "When it comes to our staff, they call and you treat them more like a friend than a co-worker.",
    link: "https://www.carecor.com/news/helping-healthcare-workers-every-day-tracy-scott/",
  },
  {
    name: "Debbie Ochoa",
    role: "Staffing Coordinator",
    image: "/test3.jpg",
    quote:
      "Just knowing that I’m a vital link between the healthcare workers and the units and I’m helping both of them is so rewarding. I have a lot of days like that -- a lot of best days.",
    link: "https://www.carecor.com/news/helping-healthcare-workers-every-day-debbie-ochoa/",
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
