"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { boxData } from "@/boxdata"; // Import your data

import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants (keep your existing ones)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const BoxComponent = ({ box }) => (
  <motion.div
    className={`w-full p-6 rounded-xl bg-gradient-to-br ${box.gradientFrom} ${box.gradientTo} shadow-lg border ${box.borderColor} md:block`}
    variants={boxVariants}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h2 className={`text-2xl font-bold mb-3 ${box.textColor}`}>{box.title}</h2>
    <p className="text-gray-600">{box.description}</p>
  </motion.div>
);

const ScrollButton = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkIfAtBottom = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
    
    setIsAtBottom(windowHeight + scrollPosition >= documentHeight - 100);
  };

  const scrollTo = () => {
    if (isAtBottom) {
      // Scroll to top if at bottom
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Scroll to bottom if not at bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfAtBottom);
    return () => window.removeEventListener("scroll", checkIfAtBottom);
  }, []);

  return (
      <button
      className="fixed right-6 bottom-6 w-12 h-12 rounded-full  text-black flex items-center justify-center shadow-lg transition-all duration-300 z-50 hover:bg-gray-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-300"
      onClick={scrollTo}
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {isAtBottom ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </button>
  );
};




const Page = () => {
  return (
    <>
    <main className="bg-white text-black">
        <ScrollButton />
        <nav className="flex justify-center items-center max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
          <Link href="/" className="text-black hover:text-blue-600">
            &larr; Back to Portfolio
          </Link>
        </nav>

        <div className="banner">
          <div className="slider" style={{ "--quantity": 10 }}>
            <div className="item" style={{ "--position": 1 }}>
              <Image
                src="/images/HTML5.png"
                width={100}
                height={100}
                alt="HTML5"
              />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <Image
                src="/images/JavaScript.png"
                width={100}
                height={100}
                alt="JavaScript"
              />
            </div>
            {/* More items */}
            <div className="item" style={{ "--position": 3 }}>
              <Image
                src="/images/TypeScript.png"
                width={100}
                height={100}
                alt="TypeScript"
              />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <Image
                src="/images/Node.js.png"
                width={100}
                height={100}
                alt="Node.js"
              />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <Image
                src="/images/PostgresSQL.png"
                width={100}
                height={100}
                alt="PostgreSQL"
              />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <Image
                src="/images/Tailwind CSS.png"
                width={100}
                height={100}
                alt="Tailwind CSS"
              />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <Image
                src="/images/FastAPI.png"
                width={100}
                height={100}
                alt="FastAPI"
              />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <Image
                src="/images/Docker.png"
                width={100}
                height={100}
                alt="Docker"
              />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <Image
                src="/images/Next.js.png"
                width={100}
                height={100}
                alt="Next.js"
              />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <Image
                src="/images/favicon.ico"
                width={100}
                height={100}
                alt="Favicon"
              />
            </div>
          </div>
          <div className="content">
            <h1 data-content="Projects">Projects</h1>
            <div className="author">
              <h2>My</h2>
              <p>
                <b>Portfolio</b>
              </p>
              <p>Scroll down for more </p>
            </div>
            <div className="model"></div>
          </div>
        </div>
  <motion.div
        className="flex flex-col gap-5 p-4 md:flex-row md:gap-8 md:p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {boxData.map((box) => (
          <BoxComponent key={box.id} box={box} />
        ))}
      </motion.div>

      </main>

      <style jsx>{`
        .banner {
          width: 100%;
          height: 100vh;
          text-align: center;
          overflow: hidden;
          position: relative;
          background-color: white;
        }
        .banner .slider {
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
        @keyframes autoRun {
          from {
            transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
          }
          to {
            transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
          }
        }

        .banner .slider .item {
          position: absolute;
          inset: 0 0 0 0;
          transform: rotateY(
              calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
            )
            translateZ(550px);
        }
        .banner .slider .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .banner .content {
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
        .banner .content h1 {
          font-family: "ICA Rubrik";
          font-size: 16em;
          line-height: 1em;
          color: black;
          position: relative;
        }
        .banner .content h1::after {
          position: absolute;
          inset: 0 0 0 0;
          content: attr(data-content);
          z-index: 2;
          -webkit-text-stroke: 2px #d2d2d2;
          color: transparent;
        }
        .banner .content .author {
          font-family: Poppins;
          text-align: right;
          max-width: 200px;
          color: black;
        }
        .banner .content h2 {
          font-size: 3em;
          color: black;
        }
        .banner .content p {
          color: black;
        }
        .banner .content .model {
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
          .banner .slider {
            width: 160px;
            height: 200px;
            left: calc(50% - 80px);
          }
          .banner .slider .item {
            transform: rotateY(
                calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
              )
              translateZ(300px);
          }
          .banner .content h1 {
            text-align: center;
            width: 100%;
            font-size: 7em;
          }
          .banner .content .author {
            padding: 20px;
            z-index: 2;
            max-width: unset;
            width: 100%;
            text-align: center;
            padding: 0 20px;
          }
        }
        @media screen and (max-width: 767px) {
          .banner .slider {
            width: 100px;
            height: 150px;
            left: calc(50% - 50px);
          }
          .banner .slider .item {
            transform: rotateY(
                calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)
              )
              translateZ(180px);
          }
          .banner .content h1 {
            font-size: 5em;
          }
        }
      `}</style>
   </>
  );
};

export default Page;