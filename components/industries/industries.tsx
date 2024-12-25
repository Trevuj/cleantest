import React from 'react'
import { TabsSection } from './Tabs'

const Industries = () => {
  return (
    <section id="pricing" className="py-24 mb-10">
  <div className="container mx-auto">
    <div className="max-w-[540px] mx-auto mb-10">
      <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#38bdf8] text-transparent bg-clip-text">Industries</h2>
      <h2 className="text-center text-2xl font-bold text-sky-800">We Serve</h2>
    </div>
  </div>
  <TabsSection />
</section>


  )
}

export default Industries