import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
import Img1 from "@/assets/about1.jpg";
import Img2 from "@/assets/about2.jpg";
import Img3 from "@/assets/about3.jpg";
import Img4 from "@/assets/about4.jpg";
import Img5 from "@/assets/about5.jpg";

export function AnimatedTestimonial() {
  const testimonials = [
    { src: Img1 },
    { src: Img2 },
    { src: Img3 },
    { src: Img4 },
    { src: Img5 }
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
