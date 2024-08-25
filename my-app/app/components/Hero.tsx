import React from 'react'
import Link from 'next/link';

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

      
      <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Hi, I&apos;m a <span className="text-[#f48049]">Fullstack Engineer</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl">
              Specializing in modern web applications with over 1 year of professional experience.
            </p>
          </div>
        </div>
      </div>
    </div>


    </div>








  )
}

export default Hero;
