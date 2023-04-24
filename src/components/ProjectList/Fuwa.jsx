import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import ProjectData from '../../ProjectData.json'
import FuwaOne from "../../assets/fuwafuwa_garalley.jpg";
import FuwaTwo from "../../assets/fuwa-1.png"
import FuwaThree from "../../assets/fuwa-2.png"
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export const Fuwa = () => {
    const data = ProjectData.projects.filter((project) => project.slug === 'fuwafuwa')[0]
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
        <>
        <Header />
            <div className="project__container">
                <section className="project__title">
                <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                    <div className="project__title-div">
                        <h1 className="project__title">
                            {data.title}
                        </h1>
                        <div className="project__nav">
                            <nav>
                            <ul className="project__nav-ul">
                                {data.skills.map((skill, i) => (
                                    <li className="project__nav-li" key={i}>#{skill}</li>
                                ))}
                            </ul>
                            </nav>
                        </div>
                    </div>
                </Reveal>

                    <div className="project__body">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                        <div className="project__img">
                            <img src={FuwaOne} alt="Fuwa" className="project__img-img"/>
                        </div>
                        <div className="project__icon">
                            <a className="project__icon-a" href="https://xs272520.xsrv.jp" target="_blank" rel="noopener noreferrer">
                                <i className="uil uil-window"></i>
                            </a>
                            <a className="project__icon-a" href="https://github.com/daisukjp/FuwaFuwa-Gallery/tree/main/FuwaFuwa" target="_blank" rel="noopener noreferrer">
                                <i className="uil uil-github"></i>
                            </a>
                        </div>
                        <div className="project__line"></div>
                    </Reveal>
                        <div className="project__body-content">
                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                            <section className="project__body-flex">
                                <img src={FuwaTwo} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Story
                                    </h1>
                                    <p className="project__content-body">
                                        In the autumn of 2022, I developed a gallery site to chronicle the growth of my friend's feline companion with a collection of captivating photos and videos. Utilizing WordPress as a platform, I customized the site further by crafting an original theme through the PHP programming.
                                    </p>
                                </div>
                            </section>
                        </Reveal>

                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                            <section className="project__body-flex-middle">
                                <img src={FuwaThree} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Fun Part
                                    </h1>
                                    <p className="project__content-body">
                                        I have developed an original theme for this site, keeping in mind my preference for simplicity, and ensuring that it is user-friendly for visitors.
                                    </p>
                                </div>
                            </section>
                        </Reveal>
                        </div>
                    </div>

                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                    <div className="project__line"></div>

                    <div className="project__bottom">
                        <h1 className="project__bottom-h1">
                            Description
                        </h1>
                        <h2 className="project__bottom-h2">
                            - Challenged making Original Theme
                        </h2>
                        <p className="project__bottom-p">
                            &#8209;
                            While taking a WordPress course in school, I designed the theme for this site. Although I struggled with the back-end coding and the placement of certain design elements, it was an invaluable opportunity to apply and expand upon what I had learned.
                        </p>

                        <h2 className="project__bottom-h2">
                            - Just for FUN
                        </h2>
                        <p className="project__bottom-p">
                            &#8209;
                            My primary motivation for creating this site was purely for the enjoyment of it. As a devoted cat person, the idea of designing a site solely dedicated to felines was particularly inspiring to me.
                        </p>
                    </div>
                    </Reveal>
                </section>
            </div>
        <Footer />
        <ScrollUp />
        </>
    );
};