import React from 'react';
import "./home.css";
import Data from './Data';
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Avatar from "../../assets/about.jpg"

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
          <div className="home__section-container">
            <div className="home__name-intro">
              <h1>Daisuke Sato</h1>
              <p>I write code and take photos</p>
            </div>

            <div className="home__profile-pic">
              <img src={Avatar} alt="" />
              <p>
              Hi, I'm Daisuke Sato, a software engineer who loves building cool things with code. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogs, and personal development.
            </p>
            </div>

            {/* <p>
              Hi, I'm Daisuke Sato, a software engineer who loves building cool things with code. In addition to coding, I also make YouTube videos, where I focus on tech, creative vlogs, and personal development.
            </p> */}
            <u>
              
            </u>
          </div>
        {/* <div className="home__content grid">
          <Data />
        <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce>
          <div className="home__img"></div>
        </Reveal>
        </div> */}
      </div>
    </section>
  )
}

export default Home