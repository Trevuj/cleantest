"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

// More specific type for Testimonial
type Testimonial = {
  src: string | { src: string }; // Allow string or object with src property
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Helper function to get the src value
  const getSrc = (testimonial: Testimonial) => {
    return typeof testimonial.src === 'string' 
      ? testimonial.src 
      : testimonial.src.src;
  };

  return (
    <div className="border rounded-3xl shadow-lg py-16">
      <div className="max-w-4xl mx-auto p-10">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={getSrc(testimonial)}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 999
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={getSrc(testimonial)}
                      alt={getSrc(testimonial)}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="flex flex-row py-4 mt-10 justify-center">
              <div className="flex gap-4 pt-12 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button"
                >
                  <ArrowBigLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-7 w-7 rounded-full bg-gray-300 dark:bg-neutral-800 flex items-center justify-center group/button shadow-xl"
                >
                  <ArrowBigRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-justify">
            At Solution saintaire optimale, we pride ourselves on delivering exceptional cleaning and facilities management services tailored to the unique needs of each of our clients. With years of experience in both residential and commercial cleaning, we are committed to providing spotless, hygienic, and welcoming environments for your home, office, or business. We understand that every client has different needs, which is why we offer flexible cleaning schedules and packages to fit your lifestyle or business requirements. Our mission is to deliver a level of service that exceeds expectations and fosters long-lasting relationships with our clients
            </h1>
            <div className="flex gap-1 items-center mt-[30px]">
              <Link href={"/about"} className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white">More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};