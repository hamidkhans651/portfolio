'use client';

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import Header from '../components/Header/page'
import Footer from '../components/Footer'
import Text from '../components/text-parallax-main'




export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main >
      <header >
        <Header />
      </header>

      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <description className='border-5 '>
        <Description />
        <Text />

      </description>

      {/* <Hero /> */}
      <projectsection className='md:block hidden'>

        <Projects />
      </projectsection>

      <footer>
        <Footer />

      </footer>


    </main>
  )
}
