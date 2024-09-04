'use client'


import { useEffect, useRef } from "react";
import Master from './components/three.js/Master'
import Future from './components/Future'
import Skill from './components/Skill'
import Footer from './components/Footer'
import Mid from './components/Mid'
import { TimelineDemo } from './acenity.UI/UI/TimelineDemo'
import Loading from './components/Loading'
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from 'lenis';
import Loader from "./components/Loader";


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
  return (

    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-white text-[3.5vw]  text-white ">

      <div className="">

        <div className="">
          <Mid />
        </div>
      </div> 
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

