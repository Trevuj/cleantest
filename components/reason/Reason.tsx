"use client";

import Image from "next/image";
import rtcu from "@/assets/reason.jpg"; // replace with your image
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function ReasonsSection() {
  const words = [
    {
      text: "Reason",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "to",
      className: "text-3xl",
    },
    {
      text: "choose",
      className: "text-3xl",
    },
    {
      text: "us",
      className: "text-3xl",
    },
  ];

  // Card data
  const cards = [
    {
      title: "Expert Team",
      points: [
        "Highly trained and experienced professionals",
        "Commitment to delivering quality service",
        "Attention to every detail",
        "Ensuring customer satisfaction every time",
      ],
    },
    {
      title: "Customized Plans",
      points: [
        "Tailored cleaning schedules to suit your business",
        "Flexible options for all types of facilities",
        "Responsive to your specific needs",
        "Cost-effective cleaning solutions",
      ],
    },
    {
      title: "Eco-Friendly Approach",
      points: [
        "Use of environmentally safe cleaning products",
        "Reducing our carbon footprint",
        "Green cleaning solutions for healthier spaces",
        "Commitment to sustainability in every job",
      ],
    },
    {
      title: "Reliability & Consistency",
      points: [
        "Consistent quality across all service visits",
        "Timely and punctual service",
        "Trustworthy and dependable staff",
        "24/7 customer support",
      ],
    },
  ];

  return (
    <div>
      <div className="container mx-auto pt-12">
        <div className="flex flex-col items-center justify-center py-2">
          <TypewriterEffectSmooth words={words} />
        </div>

        <p className="text-lg text-gray-600">
          At Solution Saintaire Optimale, we are dedicated to providing top-tier cleaning services tailored to meet the unique needs of your business. Our commitment to quality, customer satisfaction, and attention to detail sets us apart in the industry. Here&apos;s why you should choose us for all your cleaning needs:
        </p>
      </div>

      <section className="flex items-center justify-between container mx-auto my-12 px-4">
        {/* Left Section: Image */}
        <div className="w-full h-full md:w-1/2 relative hidden lg:block">
          <Image
            src={rtcu}
            alt="service image"
            className="object-cover rounded-lg shadow-2xl"
            layout="responsive"
            width={800} // Adjust width as needed
            height={600} // Adjust height as needed
          />
        </div>

        {/* Right Section: Text */}
        <div className="w-full md:w-1/2 pl-0 lg:pl-10">
          {/* Heading and Subtext */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Loop through cards */}
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative bg-white text-black p-8 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">{card.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
