import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <span id="wtblock" className="absolute top-0 w-full h-screen bg-[#d9d9d9] -skew-x-45 right-1/2 -z-10"></span>

      <Hero />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
