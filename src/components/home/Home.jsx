import React from 'react';
import "./home.css";
import Data from './Data';
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Home = () => {

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
    `;
    
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
          
        <div className="home__content grid">
          <Data />
        <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce><div className="home__img"></div></Reveal>
        </div>
      </div>
    </section>
  )
}

export default Home