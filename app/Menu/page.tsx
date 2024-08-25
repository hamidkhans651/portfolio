'use client'

import Link from "next/link"
import React, { useState, useEffect, useRef } from 'react'
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { tree } from "next/dist/build/templates/app-page";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/Work", label: "Work" },
  { path: "/About", label: "About" },
  { path: "/Contact", label: "Contact" },

];

const Menu = () => {
  const container = useRef < HTMLDivElement > (null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useGSAP(
  //   () => {
  //     gsap.set(".menu-link-items-holder", { y: 75 });

  //     tl.current = gsap
  //       .timeline({ paused: true })
  //       .to(".menu-overlay", {
  //         duration: 1.25,
  //         clipPath: "polygon(0% 0%, 100% 0%,100% 0%, 0% 0%)",
  //       })
  //       .to(".menu-link-item-holder", {
  //         y: 8,
  //         duration: 1,
  //         stagger: 0.1,
  //         ease: "power4.inOut",
  //         delay: -0.75,
  //       });
  //   },
  //   { scope: container }

  // );

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     tl.current.play()
  //   } else {
  //     tl.current.reverse();
  //   }
  // })


  return (
    <div className='menu-container' ref={container} >
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href="/"></Link>
        </div>
        <div className="menu-open" onClick={toggleMenu} >
          <p> </p>
        </div>
      </div>

      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/">Menu</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>CLose</p>
          </div>
        </div>
        <div className="menu-close-icon">
          <p>&#x2715;</p> </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item " key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}</Link>
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className="menu-info">
          <div className="menu-info-col">
            <a href="#">X &#8599;</a>
            <a href="#">LinkedIn &#8599;</a>
            <a href="#">Github &#8599;</a>
            <a href="#">Youtube &#8599;</a>
            <a href="#">Instagram &#8599;</a>
          </div>
          <div className="menu-info-col">
            <p>muhammadhamid.jj.7@gmail.com </p>
            <p>+923 1721-94379</p>

          </div>
        </div>
        <div className="menu-preview">
          <p>View showreel</p> </div>
      </div>
    </div>
  )
}

export default Menu