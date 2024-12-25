"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import Inst from "@/assets/inst.jpg";
import Healt from "@/assets/healt.jpg";
import Hos from "@/assets/hos.jpg";
import Industry from "@/assets/industry.jpg";
import Edu from "@/assets/edu.jpg";
import Com from "@/assets/commercial.jpg";

export function TabsSection() {
  const tabs = [
    {
      title: "Commercial",
      value: "commercial",
      content: (
        <div className="group w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          {/* Hidden Text that will be revealed on hover */}
          <p className="text-md font-bold hidden group-hover:block text-center pt-2 md:pt-16">
            Commercial
          </p>
          <p className="md:text-sm text-justify font-normal pt-4 md:pt-10 absolute hidden group-hover:block pr-8 text-xs">
            Commercial cleaning services are essential for maintaining a professional, hygienic, and welcoming environment in any business setting. Whether it’s an office, retail store, or industrial facility, a clean and well-maintained workspace not only fosters a positive impression but also promotes the health and productivity of employees and clients. Our commercial cleaning team is fully equipped with advanced tools and industry expertise to meet the unique demands of any business environment. We offer flexible cleaning schedules and customized services designed to ensure your space remains spotless and sanitary, day in and day out. From routine office maintenance to comprehensive deep cleaning, we work to create a pristine, professional environment that reflects the high standards of your business. Our services are crafted to enhance the workplace, contributing to improved employee morale, client satisfaction, and overall operational efficiency.
          </p>
    
          {/* Image with hover effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Com}
              alt="dummy image"
              className="object-cover w-full h-full rounded-2xl hover:opacity-10 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="group w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          {/* Hidden Text that will be revealed on hover */}
          <p className="text-md font-bold hidden group-hover:block text-center pt-16">
            Educational
          </p>
          <p className="text-sm text-justify font-normal pt-10 absolute hidden group-hover:block pr-12">
            In educational settings, cleanliness plays a critical role in creating a safe, healthy, and conducive learning environment. From primary schools to universities, daycare centers, and vocational institutions, we understand the importance of maintaining hygienic spaces to minimize the spread of germs and bacteria that can disrupt the learning process. Our cleaning services are designed to go beyond appearance; we prioritize hygiene, disinfection, and overall sanitation to safeguard the well-being of students, faculty, and staff. We work with educational institutions to develop a tailored cleaning plan that ensures classrooms, restrooms, common areas, and hallways are thoroughly cleaned and disinfected. By maintaining a clean, organized environment, we help foster a space where both focus and creativity can thrive, supporting the academic and personal success of all individuals on campus.
          </p>
    
          {/* Image with hover effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Edu}
              alt="dummy image"
              className="object-cover w-full h-full rounded-2xl hover:opacity-10 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Industrial",
      value: "industrial",
      content: (
        <div className="group w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          {/* Hidden Text that will be revealed on hover */}
          <p className="text-md font-bold hidden group-hover:block text-center pt-16">
            Industrial
          </p>
          <p className="text-sm text-justify font-normal pt-10 absolute hidden group-hover:block pr-12">
            Industrial cleaning requires specialized knowledge, skills, and equipment to ensure the safe, efficient upkeep of factories, warehouses, and manufacturing plants. These environments often involve complex machinery, large spaces, and potential hazards, making thorough cleaning essential for both safety and productivity. Our industrial cleaning services are specifically designed to meet the unique challenges of these environments. From deep-cleaning heavy machinery and industrial floors to ensuring proper sanitation in high-risk areas, we offer solutions that help maintain a clean, safe workspace. We understand the importance of minimizing operational downtime, so our team works efficiently to provide high-quality cleaning without disrupting your production schedules. Our services are focused on maximizing safety, operational efficiency, and the longevity of equipment, all while adhering to industry best practices and regulatory standards.
          </p>
    
          {/* Image with hover effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Industry}
              alt="dummy image"
              className="object-cover w-full h-full rounded-2xl hover:opacity-10 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Hospitality",
      value: "hospitality",
      content: (
        <div className="group w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          {/* Hidden Text that will be revealed on hover */}
          <p className="text-md font-bold hidden group-hover:block text-center pt-16">
            Hospitality
          </p>
          <p className="text-sm text-justify font-normal pt-10 absolute hidden group-hover:block pr-12">
            In the hospitality industry, cleanliness is not just a priority—it’s an absolute necessity for ensuring exceptional guest experiences and maintaining a stellar reputation. Our comprehensive cleaning services are tailored to meet the high standards of hotels, resorts, restaurants, and event venues, ensuring that every area is spotless, inviting, and meticulously maintained. From guest rooms and lobbies to dining areas, kitchens, and event spaces, we handle all aspects of cleaning with a sharp eye for detail and a commitment to excellence. Using safe, eco-friendly cleaning products and advanced techniques, we create an environment where guests feel comfortable, relaxed, and confident in the quality of service they receive. In hospitality, first impressions are everything, and a clean space is key to delivering memorable guest experiences. Our services ensure that every guest enjoys a welcoming, hygienic, and enjoyable stay, enhancing both comfort and satisfaction.
          </p>
    
          {/* Image with hover effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Hos}
              alt="dummy image"
              className="object-cover w-full h-full rounded-2xl hover:opacity-10 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Healthcare",
      value: "healthcare",
      content: (
        <div className="group w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          {/* Hidden Text that will be revealed on hover */}
          <p className="text-md font-bold hidden group-hover:block text-center pt-16">
            Healthcare
          </p>
          <p className="text-sm text-justify font-normal pt-10 absolute hidden group-hover:block pr-12">
            In healthcare settings, cleanliness is paramount to preventing the spread of infections and safeguarding the health and safety of both patients and staff. Our healthcare cleaning services are meticulously designed to meet the strict sanitation and disinfecting requirements of hospitals, clinics, dental offices, and medical facilities. We utilize hospital-grade disinfectants and adhere to industry best practices to clean and sanitize critical areas, including patient rooms, waiting areas, operating rooms, and high-touch surfaces. Our team is trained to handle the complexities of healthcare cleaning with the highest standards of cleanliness and infection control. With a focus on both safety and attention to detail, we help create a sterile, comfortable, and healing environment that promotes optimal health outcomes and supports patient well-being.
          </p>
    
          {/* Image with hover effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Healt}
              alt="dummy image"
              className="object-cover w-full h-full rounded-2xl hover:opacity-10 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Institutional",
      value: "institutional",
      content: (
        <div className="group w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-white">
          {/* Hidden Text that will be revealed on hover */}
          <p className="text-md font-bold hidden group-hover:block text-center pt-16">
            Institutional
          </p>
          <p className="text-sm text-justify font-normal pt-10 absolute hidden group-hover:block pr-12">
            Institutional cleaning services are vital for maintaining the cleanliness, safety, and integrity of public buildings, government facilities, libraries, museums, and other civic institutions. These spaces often experience high foot traffic, making regular and thorough cleaning essential to ensure their upkeep and to provide a welcoming environment for both visitors and staff. Our institutional cleaning services cover a wide range of needs—from routine janitorial tasks to specialized cleaning for sensitive or high-traffic areas. We ensure that every corner is sanitized, floors are spotless, and surfaces are disinfected, contributing to the overall safety and integrity of these important public spaces. We understand the unique challenges of institutional environments and are dedicated to providing reliable, professional cleaning solutions that meet the highest standards of cleanliness, safety, and public service.
          </p>
    
          {/* Image with hover effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Inst}
              alt="dummy image"
              className="object-cover w-full h-full rounded-2xl hover:opacity-10 transition-all ease-in-out duration-500"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[24rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-12">
      <Tabs tabs={tabs} />
    </div>
  );
}
