import React from 'react';
// import "./project.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import EthicalOne from "../../assets/ethical-convini-pic-1.png";
import EthicalTwo from "../../assets/ethical-2.png"
import EthicalThree from "../../assets/ethical-3.png";
import EthicalFour from "../../assets/ethical-4.png";

export const Ethical = () => {

    return (
        <>
        <Header />
            <div className="project__container">
                <section className="project__title">
                    <div className="project__title-div">
                        <h1 className="project__title">
                        Ethical Page
                        </h1>
                        <div className="project__nav">
                            <nav>
                            <ul className="project__nav-ul">
                                <li className="project__nav-li">#PHP</li>
                                <li className="project__nav-li">#Laravel 6</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="project__body">
                        <div className="project__img">
                            <img src={EthicalOne} alt="daisuke's ethical image" className="project__img-img" />
                        </div>
                        <div className="project__icon">
                            <a className="project__icon-a" href="https://ethical-conveni.com/" target="_blank">
                                <i class="uil uil-window"></i>
                            </a>
                        </div>

                        <div className="project__line"></div>

                        <div className="project__body-content">
                            <section className="project__body-flex">
                                <img src={EthicalTwo} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Story
                                    </h1>
                                    <p className="project__content-body">
                                        During the summer break of 2022, I completed a four-month internship as a front-end developer in Sapporo, Japan. While there, I collaborated with a small team to develop an e-commerce website for a client, utilizing PHP and Laravel 6.
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex-middle">
                                <img src={EthicalThree} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        About Ethical Conveni
                                    </h1>
                                    <p className="project__content-body">
                                        Ethical Conveni is an e-commerce website that offers a range of products made from sustainable and environmentally friendly materials. In addition to selling these items, the company is committed to implementing proactive measures aimed at reducing waste and preventing resources from being needlessly discarded.
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex">
                                <img src={EthicalFour} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        What I did
                                    </h1>
                                    <p className="project__content-body">
                                        My main responsibility was to conduct a comprehensive validation of the entire page, ensuring that it was optimized for ease-of-use for clients accessing the site, particularly for product management. While it is difficult to describe the process in detail, my efforts were focused on enhancing the overall user experience.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="project__line"></div>

                    <div className="project__bottom">
                        <h1 className="project__bottom-h1">
                            Description
                        </h1>
                        <h2 className="project__bottom-h2">
                            - Challenged Working Remotely
                        </h2>
                        <p className="project__bottom-p">
                            &#8209;
                            As an online intern based in Canada, I worked remotely for a Japanese company. The time zone difference posed a significant challenge, as I was only able to collaborate with my colleagues and supervisor for approximately three hours each day out of an eight-hour workday. During the initial two weeks of my internship, I faced difficulties when encountering issues that required assistance from my team.
                        </p>
                        <br />
                        <p className="project__bottom-p">
                            &#8209;
                            Over time, my search skills improved, enabling me to efficiently troubleshoot any issue that came my way. Through this process, I gained a newfound sense of assurance in my research abilities.
                        </p>
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};