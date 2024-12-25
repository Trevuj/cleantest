import React from 'react'
import { AnimatedTestimonial } from './Testomonials'

const LandingAbout = () => {
  return (
    <section id="pricing" className="py-24 overflow-x-clip">
      <div className="container mx-auto">
          <div className="max-w-[540px] mx-auto mb-10">
          <h2 className="text-center text-xl font-bold tracking-tighter text-black bg-clip-text">What we do</h2>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#38bdf8] text-transparent bg-clip-text">Cleaning</h2>
          <h2 className="text-center text-2xl font-bold text-sky-800">service</h2>
        </div>
        <AnimatedTestimonial/>
      </div>
    </section>

  )
}

export default LandingAbout