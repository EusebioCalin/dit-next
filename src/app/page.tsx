import AboutSectionOne from "./components/About/AboutSectionOne";
import AboutSectionTwo from "./components/About/AboutSectionTwo";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
