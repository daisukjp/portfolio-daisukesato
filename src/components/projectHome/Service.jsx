import React from 'react'
import "./service.css"
import { useState } from 'react'
import {  Link } from 'react-router-dom';
import EthicalOne from "../../assets/ethical-convini-pic-1.png";
import FuwaOne from "../../assets/fuwafuwa_garalley.jpg";
import Daisuke from "../../assets/daisuke_portforio.jpg";


const Service = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="service">
            <h2 className="section__title">Projects</h2>

            <div className="service__container container grid">
                <div className="service__content">
                    
                <div className="work__card">
                    <img src={EthicalOne} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">
                        Ethical Conveni 
                    </h3>
                    <h5 className="pt-h5">PHP, Laravel6</h5>

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
                </div>

                <div className="service__content">
                    
                <div className="work__card">
                    <img src={FuwaOne} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">Fuwa Fuwa-Gallery
                    </h3>
                    <h5 className="pt-h5">WordPress, PHP</h5>
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
                </div>

                <div className="service__content">
                    
                <div className="work__card">
                    <img src={Daisuke} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">My Portfolio Website</h3>
                    <h5 className="pt-h5">React(JavaScript), React Router</h5>
                    
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
            </div>
        </section>
    )
}

export default Service