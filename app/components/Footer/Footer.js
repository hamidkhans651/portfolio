'use client'

import Footer from "./Footer1";
import Intro from "./Intro";
import { useEffect } from "react";
import Lenis from 'lenis';

export default function FooterComp() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Footer />

    </main>
  );
}
