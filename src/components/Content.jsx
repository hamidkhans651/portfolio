import React from 'react'
import Line from './line'

export default function Content() {
    return (
        <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
         <Section2 />  
        </div>
    )
}
const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}
const Section2 = () => {
    return (
        <div className=''>
            <h1 className='text-5xl mb-40 leading-[1.2]   md:hidden block  '>FROM CONCEPT TO CODE</h1>
            <h1 className='text-[11vw] md:block hidden leading-[1] '>FROM CONCEPT TO CODE</h1>
            <Line />
            <p className=''>Copyright © 2024 Hamid</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0  gap-10 h-20vh' >
            <div className='flex flex-col gap-1'>
                <h3 className='mb-10 uppercase text-[#ffffff80]'>DEVELOP BY </h3>
    
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='mb-10 uppercase text-[#ffffff80]'>MUHAMMAD HAMID</h3>

            </div>
        </div>
    )
}