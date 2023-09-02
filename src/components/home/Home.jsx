import React from "react";
import "./home.css";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Avatar from "../../assets/about.jpg";

const Home = () => {
  const fadeInUp = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(40px);
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }`;

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
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={300}
          duration={600}
          triggerOnce
        >
          <div className="home__section-container">
            <div className="home__name-intro">
              <h1>Daisuke Sato</h1>
              <p style={{ lineHeight: "1.5rem" }}>
                I write code and take photos
              </p>
            </div>

            <div className="home__profile-pic">
              <img src={Avatar} alt="" />
              <p>
                Hi, I'm Daisuke Sato, a software developer who loves building
                cool things with code. In addition to coding, I also take
                photography, focusing on pet, portrait, and landscape
                photography.
              </p>
            </div>
            <ul className="home__ul animated-list">
              <li className="home__li transition-opacity">
                <a className="home__a" href="mailto:daisukjp1@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="home__icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Email me</span>
                </a>
              </li>
              <li className="home__li transition-opacity">
                <a className="home__a" href="#contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="home__icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Connect with me</span>
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
        {/* <div className="home__content grid">
          <Data />
        <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce>
          
        </Reveal>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
