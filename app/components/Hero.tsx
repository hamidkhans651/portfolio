import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';


const Hero = () => {
  return (
    <div className='w-full h-full flex '>
      {/* Navigation Section */}
      <div className="flex justify-between items-center p-4">
        <div className="logo">
          <a className='text-base sm:text-lg md:text-xl lg:text-2xl font-semibold'></a>
        </div>
        <div className='flex'>
        </div>
        <Link
          href="/Menu"
          className=" text-black py-3 px-2 rounded-full hover:bg-gray-200 transition duration-200"> 
          <button>MENU</button>
        </Link>
      </div>

    </div>








  )
}

export default Hero;
