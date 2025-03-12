import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Education />
      <Project />
      <Contact />
      <Footer />

      <Link href="#" className='px-4 border-2 border-[#1c2231]  py-2 font-extrabold flex items-center justify-center aspect-square bg-[#d9d9d9] text-[#1c2231] rounded-full fixed right-2 bottom-2 z-40 drop-shadow-2xl '>&uarr;</Link>

      
    </>
  );
}
