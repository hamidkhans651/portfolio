import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"
import Projects from './components/Projects'


const home = () => {
  return (

    <main>
      <div>
        <Loader />

        <div className=''>
          <Projects />

        </div>
      </div>

    </main>


  )
}

export default home
