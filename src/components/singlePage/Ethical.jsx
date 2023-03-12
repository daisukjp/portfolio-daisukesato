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
                                    I interned as a front-end developer for four months at a company in Sapporo, Japan, during the summer vacation of 2022. I was assigned to a small team to build an e-commerce site for a client using PHP and Laravel 6.
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
                                        Ethical Conveni is a website that sells items made from environmentally friendly resources and other products. They will be working on initiatives to curb those things before they become waste/waste in the resource.
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
                                        I mainly validated the entire page. I can't describe it in detail, but I validated it to make the site more comfortable for the clients who use the site, such as product management.
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
                            I was an online intern for a Japanese company from Canada. Due to time zone differences, I could only work with my teammates and boss for about 3 hours during an 8 hours workday. So I had a tough time during the first 2 weeks when there were problems that I needed help solving.
                        </p>
                        <br />
                        <p className="project__bottom-p">
                            &#8209;
                            Gradually, however, my search skills grew, and when I encountered a problem, I could search for and solve it. This experience gave me confidence in my research skills.
                        </p>
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};