import { main } from 'framer-motion/client'
import React from 'react'
import SimpleForm from './Form'


export default function Intro() {
  return (
    <main className='p-5 h-full'>
      <div className='flex text-[3vw] w-full items-start '>Are you interested in working together and elevate your business to the next level? Let's get to work!
      
      </div>
      <SimpleForm/>

    </main>

  )
}
