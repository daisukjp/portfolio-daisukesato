import React from 'react'
import Typed from './Typed'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";


const AboutData = () => {
    const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    `;
    return (
        <div className="profile__section">
            <h1 className="sc-hKwDye iyooZD">
                <div className="Typewriter" data-testid="typewriter-wrapper">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce> 
                        <div>
                            <Typed />
                        </div>
                        <div className="about__div">
                        <h1 className="about__h1">
                        Learning is a lifelong, goalless pursuit that I will embrace with unwavering passion.
                        </h1>
                        </div>
                    </Reveal>

                    <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>

                        <section className="about__flex">
                            <h2 className="md:w-28 text-secondary shrink-0">About</h2>
                            <div className="about__content-div">
                                <p>Hello world, I'm Daisuke Sato!</p>
                                <p>
                                    I'm a Jr Software Developer with a passion for web design. I thrive on finding fast and efficient solutions to problems, and I'm driven by the desire to make a significant impact on web development teams. 
                                </p>
                            </div>
                        </section>
                    </Reveal>
                </div>
            </h1>
        </div>
    )
}

export default AboutData
