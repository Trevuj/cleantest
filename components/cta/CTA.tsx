import Image from 'next/image'
import React from 'react'
import rtcu from "../../assets/cta.png"

const CTA = () => {
  return (
    <section className="lg:py-12 lg:flex lg:justify-center">
    <div
        className="overflow-hidden bg-white lg:mx-auto lg:flex lg:container lg:w-full lg:shadow-lg lg:rounded-xl h-[40vh]">
        <div className="lg:w-1/2 h-full">
            <Image src={rtcu} alt='hero' className="h-64 object-cover lg:h-full" />
        </div>

        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-black md:text-3xl">
                Discover <span className="text-[#7dd3fc]">Exceptional Cleaning Services</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
                Experience a spotless space with our professional cleaning services. From deep cleaning to routine maintenance,
                our expert team ensures your environment is clean, fresh, and welcoming. Let us handle the mess, so you can enjoy 
                a pristine space every day.
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
                <a href="/contact" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Contact us
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default CTA