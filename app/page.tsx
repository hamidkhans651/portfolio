import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"
import Projects from './components/Projects'
import Master from './components/Master'


const home = () => {
  return (

    <main>
      <div>
        <div className='' id='master'>

          <Master />

        </div>


        {/* <Loader />

        <div className=''>
          <Projects />

        </div> */}
      </div>

    </main>


  )
}

export default home
