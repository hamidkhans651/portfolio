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
        <div className='md:text-sm md:pd '>
            <h1 className='text-[11vw]  leading-[0.8] '>FROM CONCEPT TO CODE</h1>
            <Line />
            <p className='flex justify-start'>Copyright © 2024 Hamid</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-1'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
    
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>

            </div>
        </div>
    )
}