"use client";

import { useEffect } from "react";
import React from "react";
import Menubar from "@/components/MenuBar";
import Link from "next/link";

const page = () => {
  useEffect(() => {
    // Menu Toggle for Mobile View
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Smooth Scroll for Navigation Links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Skill Bars Animation
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        const targetWidth =
          bar.parentElement.previousElementSibling.lastElementChild.textContent;
        bar.style.width = targetWidth;
      });
    };

    // Observer to trigger skill bar animation when in view
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateSkillBars();
            observer.unobserve(skillsSection);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(skillsSection);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (menuToggle) menuToggle.removeEventListener("click", () => {});
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", () => {})
      );
    };
  }, []);

  return (
    <div className="">
      <body class="bg-gradient-to-r from-slate-700 to-black-800 min-h-screen text-white">
        <nav className="flex p-5 fixed top-0 left-0 w-full z-50">
          <Menubar />
        </nav>
        <main class="container mx-auto px-6 py-12">
          <section id="about" class="mb-20 animate-fade-in-up">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm Muhammad Hamid
            </h1>
            <p class="text-xl mb-8">
              A passionate web developer and designer creating beautiful,
              functional websites.
            </p>
            <p>
              {" "}
              I began my journey in software development during my college
              years, where I built a strong foundation in Object-Oriented
              Programming (OOP) using C and C++. Over time, I transitioned into
              the modern tech stack, mastering JavaScript, TypeScript, and
              Python. My passion for development now lies in creating full-stack
              applications, leveraging cutting-edge technologies like Next.js to
              build dynamic, scalable, and user-friendly interfaces.
            </p>

            <p>
              {" "}
              I have hands-on experience in developing cloud-native
              applications, where I apply an event-driven architecture for
              creating scalable and reliable systems. My tech stack includes:
            </p>
          </section>

          <section id="skills" class="mb-20 animate-fade-in-up">
            <h2 class="text-3xl font-bold mb-8">Skills and Expertise</h2>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between mb-1">
                  <span>HTML/CSS</span>
                  <span>90%</span>
                </div>
                <div class="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                  <div class="bg-indigo-500 h-2.5 rounded-full skill-bar"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span>Vuejs</span>
                  <span>20%</span>
                </div>
                <div class="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                  <div class="bg-indigo-500 h-2.5 rounded-full skill-bar"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span>Laravel</span>
                  <span>40%</span>
                </div>
                <div class="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                  <div class="bg-indigo-500 h-2.5 rounded-full skill-bar"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span>JavaScript</span>
                  <span>80%</span>
                </div>
                <div class="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                  <div class="bg-indigo-500 h-2.5 rounded-full skill-bar"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span>React</span>
                  <span>60%</span>
                </div>
                <div class="w-full bg-white bg-opacity-20 rounded-full h-2.5">
                  <div class="bg-indigo-500 h-2.5 rounded-full skill-bar"></div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" class="mb-20 animate-fade-in-up">
            <h2 class="text-3xl font-bold mb-8">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <h3 class="text-xl font-semibold mb-2">E-commerce Website</h3>
                <p class="mb-4">
                  A fully functional online store built with React and Node.js.
                </p>
                <a
                  href="#"
                  class="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
              <div class="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <h3 class="text-xl font-semibold mb-2">Portfolio Template</h3>
                <p class="mb-4">
                  A customizable portfolio website template for creatives.
                </p>
                <a
                  href="#"
                  class="text-indigo-300 hover:text-indigo-100 transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          </section>
        </main>
        <footer class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg mt-12">
          <div class="container mx-auto px-6 py-4 flex justify-between items-center">
            <p>&copy; 2024 M.HAmid. All rights reserved.</p>
            <div class="flex space-x-4">
              <Link
                href="https://github.com/hamidkhans651"
                class="hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-hamid-a0426a1b5/"
                class="hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </body>

      {/*         
            <p>
                I have hands-on experience in developing cloud-native applications, where I apply an event-driven architecture for creating scalable and reliable systems. My tech stack includes:

                Front-End Development: Next.js, React, TailwindCSS
                Back-End Development: Node.js, NestJS, Express.js
                Database Management: MongoDB, PostgreSQL
                Cloud & DevOps: Azure, Docker for containerization, and Kubernetes for orchestration
                Communication & Messaging Systems: Apache Kafka, Protocol Buffers
                API Management: Kong for API Gateway
                Deployment & Monitoring: Azure DevOps, GitHub Actions for CI/CD pipelines
            </p>
            <h1>Learning and Future Vision</h1>
            <p>My passion for learning drives me to continuously explore emerging technologies and paradigms. Currently, I’m focusing on cloud-native approaches, where I integrate event-driven architectures for high-performance and low-latency applications. My vision is to become an expert in building distributed systems that handle millions of transactions with ease.

                As part of this vision, I’m working on enhancing my skills in advanced tools and technologies like Apache Kafka, Azure cloud services, and Kong API Gateway. I aim to implement these technologies in real-world projects that require resilient, scalable, and maintainable architectures.

            </p>
            <h1>Career Objective</h1>
            <p>I aspire to contribute to the tech community by developing innovative solutions and sharing knowledge through teaching and open-source contributions. My goal is to specialize in cloud-native development, focusing on building complex, distributed systems that solve real-world problems for businesses of all sizes</p> */}
    </div>
  );
};

export default page;
