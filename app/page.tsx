import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"
import Master from './components/Master'
import Projects from './components/Projects'
import Button from './components/Button'
import Hero from './components/Hero'



const home = () => {
  return (

    <main className=''>
      <Button />
      <div id="landingpage" className=''>
        <Loader />
      </div>
      <section id='marquee' className='' >
        <Projects />
      </section>
    </main>


  )
}

export default home
