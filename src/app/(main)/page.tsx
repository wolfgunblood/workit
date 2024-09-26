
import BeforeAfter from "@/components/landingPage/BeforeAfter";
import CTA from "@/components/landingPage/CTA";
import Demo from "@/components/landingPage/Demo";
import FAQ from "@/components/landingPage/FAQ";
import Feature from "@/components/landingPage/Feature";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Pricing from "@/components/landingPage/Pricing";
import Testimonials from "@/components/landingPage/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <Demo />
      <Feature />
      <Pricing />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
