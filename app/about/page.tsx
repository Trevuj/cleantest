import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { HeroHighlightDemo } from "@/components/about/Hero";
import About from "@/components/about/about";
import Img1 from "@/assets/1.jpg"
import Img2 from "@/assets/2.jpg"
import Img3 from "@/assets/3.jpg"
import Img4 from "@/assets/4.jpg"
import Img5 from "@/assets/5.jpg"
import Img6 from "@/assets/6.jpg"
import Img7 from "@/assets/7.jpg"
import Img8 from "@/assets/8.jpg"
import Img9 from "@/assets/9.jpg"
import Img10 from "@/assets/10.jpg"

export default function page() {
  const data = [
    {
      content: (
        <div>
  <div className="grid grid-cols-2 gap-4">
    {/* First image wrapped in a div with h-96 and w-full */}
    <div className="h-96 w-full">
      <Image
        src={Img1}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Second image wrapped in a div with h-96 and w-full */}
    <div className="h-96 w-full">
      <Image
        src={Img2}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Third image (already wrapped in a div with h-96 and w-full) */}
    <div className="h-96 w-full">
      <Image
        src={Img3}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Fourth image (already wrapped in a div with h-96 and w-full) */}
    <div className="h-96 w-full">
      <Image
        src={Img4}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  </div>
</div>

      ),
    },
    {
      content: (
        <div>
  <div className="grid grid-cols-2 gap-4">
    {/* First image wrapped in a div with h-96 and w-full */}
    <div className="h-96 w-full">
      <Image
        src={Img5}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Second image wrapped in a div with h-96 and w-full */}
    <div className="h-96 w-full">
      <Image
        src={Img6}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Third image (already wrapped in a div with h-96 and w-full) */}
    <div className="h-96 w-full">
      <Image
        src={Img7}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  </div>
</div>

      ),
    },
    {
      content: (
        <div>
  <div className="grid grid-cols-2 gap-4">
    {/* First image wrapped in a div with h-96 and w-full */}
    <div className="h-96 w-full">
      <Image
        src={Img8}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Second image wrapped in a div with h-96 and w-full */}
    <div className="h-96 w-full">
      <Image
        src={Img9}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>

    {/* Third image (already wrapped in a div with h-96 and w-full) */}
    <div className="h-96 w-full">
      <Image
        src={Img10}
        alt="startup template"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  </div>
</div>

      ),
    },
  ];
  return (
    <div className="w-full">
        <HeroHighlightDemo />
        <About/>
      <Timeline data={data} />
    </div>
  );
}