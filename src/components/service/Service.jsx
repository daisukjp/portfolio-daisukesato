import React from 'react'
import "./service.css"
import { useState } from 'react'
import {  Link } from 'react-router-dom';
import Work1 from "../../assets/work1.jpg";
import Fuwa from "../../assets/fuwafuwa_garalley.jpg";
import Daisuke from "../../assets/daisuke_portforio.jpg";


const Service = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="service">
            <h2 className="section__title">Projects</h2>
            <h3 className="section__subtitle">Recent works</h3>

            <div className="service__container container grid">
                <div className="service__content">
                    
                <div className="work__card">
                    <img src={Work1} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">Title1</h3>
                    <span className="work__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </span>
                    </div>

                    
                </div>

                        <div className={toggleState === 1 ? "service__model active-model" : "service__model"}>
                        <div className="service__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                            </i>
                            <img src={Work1} alt="work__img" className="work__img2" />
                            <div className="work__cover-content">
                                <h3 className="service__model-title">
                                    hello1
                                </h3>
                                <p className="service__model-description">
                                    test1
                                </p>
                            </div>
                            <div className="work__cover">
                                <a className="sc-iwjdpV ilgNXF" href="/work/mokumoku">Detail
                                <i class="uil uil-file-info-alt"></i>
                                </a>
                                <div class="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="/work/mokumoku">Detail
                                <i class="uil uil-window"></i>
                                </a>
                                <div class="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="/work/mokumoku">Detail
                                <i class="uil uil-github"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="service__content">
                    
                <div className="work__card">
                    <img src={Daisuke} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">My portfolio page</h3>
                    <span className="work__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </span>
                    </div>

                    
                </div>

                        <div className={toggleState === 2 ? "service__model active-model" : "service__model"}>
                        <div className="service__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                            </i>
                            <img src={Daisuke} alt="work__img" className="work__img2" />
                            <div className="work__cover-content">
                                <h3 className="service__model-title">
                                    My portfolio page
                                </h3>
                                <p className="service__model-description">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, 
                                </p>
                            </div>
                            <div className="work__cover">
                                <Link to="/portfolio" className="sc-iwjdpV ilgNXF">
                                    Detail
                                <i class="uil uil-file-info-alt"></i>
                                </Link>

                                <div class="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://www.daisukjp.com/" target="_blank">View
                                <i class="uil uil-window"></i>
                                </a>
                                <div class="sc-dlVxhl psblj"></div>
                                
                                    <a className="sc-iwjdpV ilgNXF" href="https://github.com/daisukjp/portfolio-daisukesato" target="_blank">GitHub
                                    <i class="uil uil-github"></i>
                                </a>
                    
                            </div>

                        </div>
                    </div>
                </div>

                <div className="service__content">
                    
                <div className="work__card">
                    <img src={Fuwa} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">Fuwa Fuwa-Gallery
                    </h3>
                    <span className="work__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </span>
                    </div>

                    
                </div>

                    {/* <div className="service__model active-model"> */}
                        <div className={toggleState === 3 ? "service__model active-model" : "service__model"}>
                        <div className="service__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                            </i>
                            <img src={Fuwa} alt="Fuwa fuwa" className="work__img2" />
                            <div className="work__cover-content">
                                <h3 className="service__model-title">
                                    FuwaFuwa-Gallery

                                </h3>
                                <p className="service__model-description">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                </p>
                            </div>
                            <div className="work__cover">
                                <a className="sc-iwjdpV ilgNXF" href="/work/mokumoku">Detail
                                <i class="uil uil-file-info-alt"></i>
                                </a>
                                <div class="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://xs272520.xsrv.jp/" target="_blank">View
                                <i class="uil uil-window"></i>
                                </a>
                                <div class="sc-dlVxhl psblj"></div>
                                <a className="sc-iwjdpV ilgNXF" href="https://github.com/daisukjp/FuwaFuwa-Gallery" target="_blank">GitHub
                                <i class="uil uil-github"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Service