'use client'

import React from 'react'
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
      <button className='scroll-button border-2 rounded-full py-6 px-2 ' onClick={scrollToBottom}>
        MY WORK

      </button>
    </div>
  )
}

export default Button
