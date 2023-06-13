import React from 'react'
import "./service.css"
import { useState } from 'react'
import ProjectData from '../../ProjectData.json'
import { ProjectsPost } from './ProjectsPost'
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Service = () => {
    const [datas, setDatas] = useState(ProjectData.projects)

    const directionArr = ['row', 'row-reverse'];
    const chooseDirection = (i) => {
        if (i % 2 === 0) {
            return directionArr[0];
        } else {
            return directionArr[1];
        }
    };

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    

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
        <section className="services section" id="service">
            {/* <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <h2 className="section__title">Projects</h2>
            </Reveal>

            <div className="service__container container grid">
                <div className="service__content">
                <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                    <div className="work__card">
                            <img src={EthicalOne} alt="work__img" className="work__img" />
                        <div className="card__content">
                            <h3 className="work__title">
                                Ethical Conveni 
                            </h3>
                            <h4 className="pt-h5">PHP, Laravel6</h4>
                            <div className="work__cover">
                                <Link to="projects/ethical" className="sc-iwjdpV ilgNXF">
                                    Detail
                                <i className="uil uil-file-info-alt"></i>
                                </Link>
                                <div className="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://ethical-conveni.com/" target="_blank" rel="noopener noreferrer">View
                                <i className="uil uil-window"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>

                </div>
                <div className="service__content">
                <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                    <div className="work__card">
                            <img src={FuwaOne} alt="work__img" className="work__img" />
                        <div className="card__content">
                            <h3 className="work__title">Fuwa Fuwa-Gallery
                            </h3>
                            <h4 className="pt-h5">WordPress, PHP</h4>
                            <div className="work__cover">
                                <Link to="projects/fuwafuwa" className="sc-iwjdpV ilgNXF">
                                    Detail
                                <i className="uil uil-file-info-alt"></i>
                                </Link>
                                <div className="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://xs272520.xsrv.jp/" target="_blank" rel="noopener noreferrer">View
                                <i className="uil uil-window"></i>
                                </a>
                                <div className="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://github.com/daisukjp/FuwaFuwa-Gallery" target="_blank" rel="noopener noreferrer">GitHub
                                <i className="uil uil-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
                </div>

                <div className="service__content">
                <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                    <div className="work__card">
                            <img src={Daisuke} alt="work__img" className="work__img" />
                        <div className="card__content">
                            <h3 className="work__title">My Portfolio Website</h3>
                            <h4 className="pt-h5">React(JavaScript), React Router</h4>
                        
                        <div className="work__cover">
                            <Link to="projects/portfolio" className="sc-iwjdpV ilgNXF">
                                Detail
                            <i className="uil uil-file-info-alt"></i>
                            </Link>

                            <div className="sc-dlVxhl psblj"></div>
                            <a className="sc-iwjdpV ilgNXF" href="https://www.daisukjp.com/" target="_blank" rel="noopener noreferrer">View
                            <i className="uil uil-window"></i>
                            </a>
                            <div className="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://github.com/daisukjp/portfolio-daisukesato" target="_blank" rel="noopener noreferrer">GitHub
                                <i className="uil uil-github"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                </Reveal>

                        <div className={toggleState === 2 ? "service__model active-model" : "service__model"}>
                        <div className="service__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                            </i>
                            <img src={Daisuke} alt="work__img" className="work__img2" />
                            <div className="work__cover-content">
                                <h3 className="service__model-title">
                                    My Portfolio Website
                                </h3>
                                <p className="service__model-description">
                                    This is my personal portfoli website using React with JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <div className="project__box-container">
                    <h2 className="project__h2-1">Projects</h2>
                    <ul className="animated-list">
                    {datas.map((data, i) => {
                        const direction = chooseDirection(i)
                        return <ProjectsPost key={data.title}  data={data} direction={direction} />
                    })}
                    </ul>
                </div>
            </Reveal>

        </section>
    )
}

export default Service