'use client'

import React from 'react'
import Image from 'next/image'

import { FaArrowCircleDown } from "react-icons/fa";


const Button = () => {
  // Function to handle the scroll
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scrolls to the bottom of the document
      behavior: 'smooth' // Smooth scroll
    });
  }

  return (
    <div>
      <button className='scroll-button ' onClick={scrollToBottom}>
        <FaArrowCircleDown />
      </button>
    </div>
  )
}

export default Button
