import React from 'react'
import Link from 'next/link'
import Loader from "./components/Loader"

import Master from './components/Master'


const home = () => {
  return (

    <main>
      <div>
        <div className='' id='master'>

        </div>
        <Loader />
      </div>

    </main>


  )
}

export default home
