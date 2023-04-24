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
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce> 
                        <div>
                            <Typed />
                        </div>
                        <div className="about__div">
                        <h1 className="about__h1">
                        Learning is a lifelong, goalless pursuit that I will embrace with unwavering passion.
                        </h1>
                        </div>
                    </Reveal>

                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <ul className="about__ul">
                            <li className="about__li">
                                <span className='about__span'>
                                    Passionate about web development
                                </span>
                                <br />
                                I am a front-end developer who is eager to learn about new technologies.
                            </li>

                            <li className="about__li">
                                <span className='about__span'>
                                    High potential as a developer
                                </span>
                                <br />
                                Coding brings me immense pleasure, and the pursuit of knowledge and problem-solving invigorate my passion for learning.
                            </li>
                            <li className="about__li">
                                <span className='about__span'>
                                Diploma in Digital Media and IT Web Design and Development
                                </span>
                                <br />
                                I'm furthering my professional web development studies at Northern Alberta institute of Technology. I'm looking for a job as a front-end developer.
                            </li>
                        </ul>
                    </Reveal>
                </div>
            </h1>
        </div>
    )
}

export default AboutData
