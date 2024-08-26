import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"

import Master from './components/Master'
import Projects from './components/Projects'


const home = () => {
  return (

    <main>
      <div>
        <Loader />
      </div>
      
      <section id='marquee'>
        <Projects />
      </section>
    </main>


  )
}

export default home
