'use client'


import { useEffect, useState, useRef } from "react";
import { TimelineDemo } from './acenity.UI/UI/TimelineDemo'
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from 'lenis';
import LandingPage from '../app/LandingPage'

export default function Home() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <main ref={container} className="relative h-[200vh]">

      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  const stickyElement = useRef(null);
  return (

    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-white  text-white ">
      <LandingPage />

      <main className="lg:block md:block hidden sm:hidden xs:hidden">

      </main>
    </motion.div>
  )
}

const Section2 = ({ scrollYProgress }) => {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])



  return (


    <motion.div style={{ scale, rotate }} className="relative h-screen">


      <TimelineDemo />
    </motion.div>

  )
}




