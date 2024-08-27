import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"
import Master from './components/Master'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Future from './components/Future'
import Skill from './components/Skill'
import Footer from './components/Footer'
import Mid from './components/Mid'



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

      <div className=' bg-white'>
        <div id='Projects' style={{ flex: 1 }}>
          {/* <Projects /> */}
        </div>

        <div className='right-section'>
          <div className='master-top'>
            <Master />
          </div>
          <div className='master-bottom'>
            <Mid />
          </div>
        </div>
      </div>
      <Future />
      <Skill />
      <Footer />
    </main>


  )
}

export default home
