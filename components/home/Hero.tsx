"use client"
import HeroImage from "../../assets/hero-art.png"
import Image from "next/image";

export const Hero = () => {
  return( 
    <section 
      id="home"  
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7dd3fc,#EAEEFE_100%)] overflow-x-clip px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="w-full md:w-full lg:w-1/2 md:pr-8">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-t from-black to-[#38bdf8] text-transparent bg-clip-text mt-6">
            Comprehensive Cleaning Services Tailored to Your Needs
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6 text-justify">
                Discover our comprehensive range of services crafted to maintain the highest standards of cleanliness for your space. Whether it’s your home, office, or commercial establishment, we’re dedicated to creating a spotless, healthy, and welcoming environment that you can enjoy every day.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight bg-black text-white">Contact us</button>
            </div>
          </div>


          <div className="w-full md:w-4/8 mt-20 md:mt-0 md:h-[648px] overflow-x-visible block md:hidden lg:block ml-0 lg:ml-48 md:ml-0">
            <Image
              src={HeroImage}
              alt="hero image"
              className="lg:h-[650px] lg:w-[850px] object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};