import React from 'react'
import { Card } from './Card'

const Services = () => {
  return (
    <section id="pricing" className="py-24 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#7dd3fc,#EAEEFE_100%)] overflow-x-clip">
      <div className="container mx-auto">
          <div className="max-w-[540px] mx-auto mb-10">
          <h2 className="text-center text-7xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#38bdf8] text-transparent bg-clip-text">Services</h2>
        </div>
      </div>
      <Card />
    </section>

  )
}

export default Services