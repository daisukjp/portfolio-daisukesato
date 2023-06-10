import React from 'react'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Data = () => {

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
        <div className="home__data">
            <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                {/* <h1 className="name__intro">HELLO. I'M</h1> */}
            </Reveal>
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <h1 className="home__title">
                    Daisuke
                </h1>
                <h1 className="name__bottom">
                Sato
                </h1>
            </Reveal> */}
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                <h3 className="home__subtitle">Software Developer based in Edmonton</h3>
            

            <a href="#contact" className="button button__flex">
                GET IN TOUCH
            </a>
            </Reveal> */}

        </div>
    )
}

export default Data
