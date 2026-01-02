import { useEffect } from "react";
import AOS from "aos";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Aboutus />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}
