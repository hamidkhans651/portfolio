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
import { TimelineDemo } from './components/TimelineDemo'
import Menu from './Menu/Menu'
import Loading from './components/Loading'



const home = () => {
  return (

    <main className=''>
   
      {/* <Menu /> */}
      <div className=''> <Loading/>
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
      <TimelineDemo />
      <Future />
      <Skill />
      <Footer />
    </main>


  )
}

export default home
