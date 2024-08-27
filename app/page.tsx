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

      <div className='page-container bg-white'>
        <div id='Projects' style={{ flex: 1 }}>
          <Projects />
        </div>

        <div className='right-section'>
          <div className='master-top'>
            <Master />
          </div>
          <div className='master-bottom'>
            <Master /> {/* Assuming you want another instance or a different component here */}
          </div>
        </div>
      </div>

    </main>


  )
}

export default home
