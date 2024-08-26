import React from 'react'
import Image from 'next/image'


const Projects = () => {
  return (
    <div>
      <div className="marquee">
        <h1>FROM CONCEPT TO CODE</h1>
        <Image
          src="/arrow.svg"
          alt="Arrow"
          width={10}
          height={10}
          layout='responsive'
        />
      </div>
    </div>
  )
}

export default Projects
