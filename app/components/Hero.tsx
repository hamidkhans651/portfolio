import React from 'react'
import Link from 'next/link';
import Master from './Master';
import Image from 'next/image';


const Hero = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      {/* Navigation Section */}
      <div className="flex justify-between items-center p-4">
        <div className="logo">
          <a className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'>M.HAMID</a>
        </div>
        <Link
          href="/Menu"
          className=" text-black py-3  px-2 rounded-full hover:bg-gray-200 transition duration-200"
        > MENU
        </Link>

 
      </div>
      {/* Main Content Centering */}
    
    </div>








  )
}

export default Hero;
