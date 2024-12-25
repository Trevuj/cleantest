"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import desinfection from "@/assets/desinfection.jpg"
import cleaning from "@/assets/cleaning.jpg"
import IndoorJanitorial from "@/assets/IndoorJanitorial.jpg"
import CommercialFloorCleaning from "@/assets/CommercialFloorCleaning.jpg"
import outdoorbuildingMaintinace from "@/assets/outdoorbuildingMaintinace.jpg"
import cleaingsupport from "@/assets/cleaingsupport.jpg"

// Define the Project interface
interface Project {
  title: string;
  description: string;
  moreDescription: string;
  image: StaticImageData;
}

// Card component
export function Card() {
  // State for managing the modal visibility and selected project
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Project data
  const projects: Project[] = [
    {
      title: "Disinfection",
      description:
        "Providing top-tier disinfection services to ensure clean and safe environments in various settings, from offices to healthcare facilities.",
      moreDescription:
        "We utilize advanced technologies and eco-friendly products to eliminate pathogens and allergens, ensuring that your spaces remain safe and healthy. Our disinfection services are customizable based on the specific needs of your environment. We focus on providing thorough and effective sanitization that meets high standards for hygiene. Our team uses hospital-grade disinfectants and adheres to best practices to ensure maximum efficacy. We also offer flexible scheduling to minimize disruption to your operations. Key benefits include: Reduced risk of infections Safe, eco-friendly products Customizable services for different environments Minimal disruption with flexible scheduling",
      image: desinfection
    },
    {
      title: "Cleaning",
      description:
        "Comprehensive cleaning solutions for homes and businesses, tailored to meet specific sanitation and upkeep needs.",
      moreDescription:
        "From daily cleaning to deep cleaning, we offer personalized services to ensure every corner of your home or business remains spotless. We specialize in eco-friendly cleaning methods and use high-quality products to guarantee exceptional results. Our cleaning professionals are trained to handle all types of spaces, ensuring your environment is fresh, clean, and healthy. Whether you need routine cleaning or occasional deep cleaning, we customize our services based on your needs. Benefits include: Eco-friendly cleaning solutions trained professionals for every task Customized cleaning schedules Exceptional attention to detail High-quality, non-toxic cleaning products",
        image: cleaning
    },
    {
      title: "Indoor Janitorial",
      description:
        "Professional janitorial services focused on maintaining pristine indoor spaces, including offices, schools, and retail locations.",
      moreDescription:
        "Our janitorial team offers regular cleaning schedules, ensuring a clean and organized workspace for employees and visitors. We take pride in maintaining hygienic and welcoming indoor environments for businesses of all sizes. Our services range from daily cleaning to periodic deep cleaning and specialized tasks like carpet care and window washing. We use effective cleaning techniques to ensure that your space remains presentable and professional at all times. Highlights of our janitorial services include: Daily or periodic cleaning schedules\n- Comprehensive cleaning services (floor care, window washing, etc.) Trained staff and quality equipment flexible hours to accommodate your business schedule consistent attention to detail and hygiene",
        image: IndoorJanitorial
    },
    {
      title: "Commercial Floor Cleaning",
      description:
        "Expert floor cleaning services for commercial properties, enhancing the look and lifespan of various flooring types.",
      moreDescription:
        "We specialize in floor care for a wide variety of surfaces, including carpet, tile, hardwood, and concrete. Our services include deep cleaning, waxing, and polishing to maintain a polished and professional appearance. We understand the importance of preserving the look and durability of your flooring while ensuring cleanliness and hygiene. Our team uses industry-leading tools and techniques to extend the lifespan of your floors. Floor care services include: Deep cleaning for carpets, tile, and hardwood floor waxing and polishing for a lasting shine stain removal and spot treatment routine maintenance plans for high-traffic areas eco-friendly products that protect your flooring and environment",
        image: CommercialFloorCleaning
    },
    {
      title: "Outdoor Building Maintenance",
      description:
        "Outdoor maintenance services to keep building exteriors and surrounding areas clean and well-kept year-round.",
      moreDescription:
        "We offer pressure washing, landscaping, and general maintenance to ensure that your property's exterior is always clean and inviting. Our outdoor services help maintain your building's curb appeal and longevity. Whether you need routine maintenance or seasonal services, we can tailor a plan that fits your specific needs. Our team is equipped to handle everything from routine pressure washing to extensive landscaping projects. Outdoor services include: Pressure washing of building exteriors and walkways landscaping and lawn care Seasonal cleanup (leaf removal, snow removal) general maintenance for parking lots and outdoor areas customized plans to fit your property's needs",
        image: outdoorbuildingMaintinace
    },
    {
      title: "Event Support",
      description:
        "Full-service event support, including pre-event setup and post-event cleaning, to ensure smooth and spotless event experiences.",
      moreDescription:
        "From corporate events to private parties, we provide comprehensive event support, including setup, cleanup, and maintenance during the event. Our team ensures that everything runs smoothly, so you can focus on your event while we handle the details. We provide all necessary equipment and staff to ensure your event is a success. Whether you're hosting a small gathering or a large conference, we can customize our services to fit your needs. Event support services include: Pre-event setup and post-event breakdown cleanup during and after events furniture and equipment rentals customized plans based on event size and type professional, efficient staff to handle all logistics",
        image: cleaingsupport
    },
  ];
    
  // Open modal with the selected project
  const handleLearnMore = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project, idx) => (
        <div key={idx} onClick={() => handleLearnMore(project)}>
          <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[30rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-black dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                className="px-4 py-2 rounded-xl text-md font-bold dark:text-white cursor-pointer"
              >
                Learn more
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-[90%] sm:w-[70%] md:w-[50%] max-w-xl">
            <h2 className="text-2xl font-bold text-center text-neutral-800 dark:text-white mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
              {selectedProject.description}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 text-justify">
              <strong>More Details:</strong>
              <br />
              {selectedProject.moreDescription}
            </p>
            <button
              onClick={handleCloseModal}
              className="w-full bg-emerald-500 text-white py-2 rounded-lg mt-4 hover:bg-emerald-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}