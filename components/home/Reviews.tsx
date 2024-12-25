"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[14rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    description:
      "Solution Saintaire Optimale did an outstanding job! They were thorough and cleaned every corner of my office to perfection. I couldn't be happier with their service!"
  },
  {
    description:
      "They transformed my floors into something that looks brand new! Fast, professional, and thorough. I highly recommend them for any cleaning job."
  },
  {
    description:
      "Solution Saintaire Optimale's attention to detail is second to none. They made my home feel fresh, clean, and inviting. I'm already planning my next booking with them!"
  },
  {
    description:
      "The attention to detail was remarkable. They made my home shine from top to bottom—truly a fresh start! Will definitely book again."
  },
  {
    description:
      "Solution Saintaire Optimale went above and beyond. They tackled areas I hadn't even considered, and my building has never looked better. Truly top-notch service!"
  },
];

