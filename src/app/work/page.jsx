"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  // Animation variants
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

  return (
    <>
      <main className="bg-white text-black">
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
                src="/public/images/Next.js.png"
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
          {/* Box 1 - Always visible */}
          <motion.div
            className="w-full p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg border border-indigo-100"
            variants={boxVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-2xl font-bold mb-3 text-indigo-600">Box 1</h2>
            <p className="text-gray-600">
              This beautifully animated box is always visible. On larger
              screens, it appears side by side with Box 2.
            </p>
          </motion.div>

          {/* Box 2 - Hidden on mobile, visible on md screens and up */}
          <motion.div
            className=" w-full p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg border border-pink-100 md:block"
            variants={boxVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-2xl font-bold mb-3 text-pink-600">Box 2</h2>
            <p className="text-gray-600">
              This elegantly revealed box appears only on larger screens with a
              smooth animation.
            </p>
          </motion.div>
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
