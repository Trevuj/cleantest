import { useTranslations } from 'next-intl';
import CTA from "@/components/cta/CTA";
import { Hero } from "@/components/home/Hero";
import { Reviews } from "@/components/home/Reviews";
import Industries from "@/components/industries/industries";
import LandingAbout from "@/components/landing-about/LandingAbout";
import ReasonsSection from "@/components/reason/Reason";
import Services from "@/components/services/Services";

export default function Home() {
  const t = useTranslations();
  
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="about">
        <LandingAbout />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="industries">
        <Industries />
      </section>
      <section id="why-us">
        <ReasonsSection />
      </section>
      <section id="cta">
        <CTA />
      </section>
    </>
  );
}