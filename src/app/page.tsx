import Encryption from "@/app/components/main/Encryption"
import Hero from "@/app/components/main/hero";
import Projects from "@/app/components/main/Projects";
import Skills from "@/app/components/main/Skills";
import Image from "next/image";
import Footer from "./components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer/>
      </div>
    </main>
  );
}



