'use client';

import React from 'react';
import Image from 'next/image';
import Menubar from '@/components/MenuBar';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};



const Page = () => {


  return (
    <>
      <main>
        <nav className='flex p-5 fixed top-0 left-0 w-full z-50'>
          <Menubar /></nav>

        <div className="banner">
          <div className="slider" style={{ '--quantity': 10 }}>
            <div className="item" style={{ '--position': 1 }}>
              <Image src="/public/images/HTML5.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 2 }}>
              <Image src="/public/images/JavaScript.png" width={100} height={100} alt="" />
            </div>
            {/* More items */}
            <div className="item" style={{ '--position': 3 }}>
              <Image src="/public/images/TypeScript.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 4 }}>
              <Image src="/public/images/Node.js.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 5 }}>
              <Image src="/public/images/PostgresSQL.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 6 }}>
              <Image src="/public/images/Tailwind CSS.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 7 }}>
              <Image src="/public/images/FastAPI.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 8 }}>
              <Image src="/public/images/Docker.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 9 }}>
              <Image src="/public/images/Next.js.png" width={100} height={100} alt="" />
            </div>
            <div className="item" style={{ '--position': 10 }}>
              <Image src="/public/images/favicon.ico" width={100} height={100} alt="" />
            </div>
          </div>
          <div className="content">
            <h1 data-content="Projects">Projects</h1>
            <div className="author">
              <h2>My</h2>
              <p><b>Portfolio</b></p>
              <p>Scroll down for more </p>
            </div>
            <div className="model"></div>
          </div>
        </div>
    
     

      </main>

      <style jsx>{`
      
.banner{
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.banner .slider{
    position: absolute;
    width: 200px;
    height: 250px;
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
}
@keyframes autoRun{
    from{
        transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
    }to{
        transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
    }
}

.banner .slider .item{
    position: absolute;
    inset: 0 0 0 0;
    transform: 
        rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
        translateZ(550px);
}
.banner .slider .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.banner .content{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(1400px, 100vw);
    height: max-content;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}
.banner .content h1{
    font-family: 'ICA Rubrik';
    font-size: 16em;
    line-height: 1em;
    color: black;
    position: relative;
}
.banner .content h1::after{
    position: absolute;
    inset: 0 0 0 0;
    content: attr(data-content);
    z-index: 2;
    -webkit-text-stroke: 2px #d2d2d2;
    color: transparent;
}
.banner .content .author{
    font-family: Poppins;
    text-align: right;
    max-width: 200px;
}
.banner .content h2{
    font-size: 3em;
}
.banner .content .model{
    background-image: url(images/model.png);
    width: 100%;
    height: 75vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
}
@media screen and (max-width: 1023px) {
    .banner .slider{
        width: 160px;
        height: 200px;
        left: calc(50% - 80px);
    }
    .banner .slider .item{
        transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(300px);
    }
    .banner .content h1{
        text-align: center;
        width: 100%;
        text-shadow: 0 10px 20px #000;
        font-size: 7em;
    }
    .banner .content .author{
        color: black;
        padding: 20px;
        text-shadow: 0 10px 20px #000;
        z-index: 2;
        max-width: unset;
        width: 100%;
        text-align: center;
        padding: 0 20px;
        
    }
}
@media screen and (max-width: 767px) {
    .banner .slider{
        width: 100px;
        height: 150px;
        left: calc(50% - 50px);
    }
    .banner .slider .item{
        transform: 
            rotateY(calc( (var(--position) - 1) * (360 / var(--quantity)) * 1deg))
            translateZ(180px);
    }
    .banner .content h1{
        font-size: 5em;
    }
}


      `}</style>
    </>
  );
};

export default Page;
