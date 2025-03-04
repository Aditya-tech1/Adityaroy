import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <span id="wtblock" className="absolute w-[100rem] h-[60rem]  rotate-130 -left-1/3 bg-[#d9d9d9] -top-1/2 -z-10 "></span>
    <Hero />
    <About />
    </>
  );
}
