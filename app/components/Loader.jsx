'use client'


import Link from "next/link";
import React, { useState, useEffect, use } from "react";
import styled from 'styled-components';

import { gsap, CSSPlugin, Expo } from "gsap";
import { createGlobalStyle } from 'styled-components';




export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter-Italic';
    src: url('/fonts/Inter-Italic.woff2') format('woff2'),
         url('/fonts/Inter-Italic.woff') format('woff');
    font-style: italic;
    font-weight: normal;
  }

  body {
    font-family: 'Inter-Italic', sans-serif;
  }
`;



gsap.registerPlugin(CSSPlugin);

function Loader() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(true);


  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);



  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
        setIsVisible(false);

      },
    });
    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  if (!isVisible) return null;

  return (
    <AppContainer className="" >

      <Loading>
        <Follow className="follow"></Follow>
        <ProgressBar
          className="hide"
          id="progress-bar"
          style={{ width: counter + "%" }}
        ></ProgressBar>
        <Count id="count" className="hide">
          {counter}%
        </Count>
      </Loading>

      <Content className="content ">
   
      </Content>

    </AppContainer>
  );


}

export default Loader;


const StyledText = styled.h1`
  font-family: 'Inter-Italic', sans-serif;
  font-size: 20px;
  font-style: italic;
`;

const AppContainer = styled.div`
    width: 100vw; // Full viewport width
    height: 100vh; // Minimum height of 100% of the viewport height
    color: #000000;
    position: relative; // Ensures it remains in document flow
    overflow: auto; // Allows for scrolling
`;

const Loading = styled.div`
    height: 100%;
    width: 100%;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
  `;
const Follow = styled.div`
    position: absolute;
    background-color: #f48049;
    height: 2px;
    width: 0;
    left: 0;
    z-index: 2;
  `;

const ProgressBar = styled.div`
    position: absolute;
    left: 0;
    background-color: #fff;
    height: 2px;
    width: 0;
    transition: 0.4s ease-out;
  `;

const Count = styled.p`
    position: absolute;
    font-size: 130px;
    color: #fff;
    transform: translateY(-15px);
    font-weight: 500;
  `;

const Content = styled.div`
    height: 100vh;
    width: 0;
    position: absolute;
    left: 0;
    top: 0;
    background-color:green;
    padding: auto;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    color: #black;


    .menu {
  color: black;
  text-decoration: none;

  &:hover {
    color: grey; // Example hover color
  }

  &:active {
    color: darkgrey; // Example active color
  }
}

  
    .main_tagline {
    display: flex;
    display: justify-between;
    align-items: right;
    font-size: 40px; 
    color: black; 
    

  
    
}
  }

  `;
