import React from "react";
import "./aboutmain.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/Scrollup";
import Contact from "../contact/Contact";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const AboutPage = () => {
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

  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "7.5rem",
          maxWidth: "800px",
          marginRight: "auto",
          marginLeft: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <Reveal
            className="onStep"
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            triggerOnce
          >
            <div style={{ gap: "2rem" }}>
              <h1 style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}>
                About
              </h1>
              <p style={{ lineHeight: "1.5rem" }}>Just a quick glimpse.</p>
            </div>
          </Reveal>

          <div className="aboutBody-top">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <section className="profile-container"></section>
              <section className="aboutBody-section">
                <h2 className="aboutBody-h2">About</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    color: "#171717",
                  }}
                >
                  <p>Hello world, I'm Daisuke Sato!</p>
                  <p>
                    I am deeply passionate about design and constantly seek
                    opportunities to integrate it into my engineering endeavors.
                  </p>
                  <p>
                    Beyond programming, I'm an avid photographer specializing in
                    pet, portrait, and landscape captures.
                  </p>
                  <p>
                    When I'm not at my desk, I'm at the gym, watching videos
                    about cats, or in a coffee shop. :)
                  </p>
                </div>
              </section>
            </Reveal>
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default AboutPage;
