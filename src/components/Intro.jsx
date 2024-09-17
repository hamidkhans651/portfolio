import React from 'react'

import Text from './text-parallax-main'


export default function Intro() {
  return (
    <div className='h-screen flex text-[2vw] items-center justify-center'>
      <Text />
      <h2 className='max-w-[45%] text-center leading-none'>This is an example of a sticky footer made with CSS.</h2>
    </div>
  )
}
