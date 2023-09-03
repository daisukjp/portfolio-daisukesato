import "./contact.css";
import ConnectLinks from "./ConnectLinks";

import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Contact = () => {
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
    <section
      className="contact section"
      id="contact"
      style={{ fontSmooth: "antialiased" }}
    >
      <Reveal
        className="onStep"
        keyframes={fadeInUp}
        delay={300}
        duration={600}
        triggerOnce
      >
        <section className="aboutBody-section">
          <h2 className="aboutBody-h2" id="#contact">
            Connect
          </h2>
          <div className="connect__div-container">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <a
                href="mailto:daisukjp1@gmail.com"
                className="contact__underline"
              >
                email me
              </a>
              . Try finding me anywhere else at @daisukjp
            </p>
            <ul className="connect__ul animated-list">
              <ConnectLinks />
            </ul>
          </div>
        </section>
      </Reveal>
    </section>
  );
};

export default Contact;
