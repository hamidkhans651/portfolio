import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"
import Master from './components/Master'
import Projects from './components/Projects'
import Hero from './components/Hero'



const home = () => {
  return (

    <main className=''>
      
      <div id="landingpage" className=''>
        <Loader />
      </div>

      <div>
        <Hero />
      </div>


      <div className=''>
      </div>

      <div className='master-div bg-green-600'>
        <Master />


      </div>

      <section id='Projects' className='' >
        <Projects />
      </section>
    </main>


  )
}

export default home
