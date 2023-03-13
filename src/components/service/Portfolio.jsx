import React from 'react';
import "./project.css"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Daisuke from "../../assets/daisuke_portforio.jpg";
import PortfolioOne from "../../assets/Daisuke Sato logo.png";
import PortfolioTwo from "../../assets/portfolio_skills.png";

export const Portfolio = () => {

    return (
        <>
        <Header />
            <div id="portfoliopage" className="project__container">
                <section className="project__title">
                    <div className="project__title-div">
                        <h1 className="project__title">
                        My Portfolio Page
                        </h1>
                        <div className="project__nav">
                            <nav>
                            <ul className="project__nav-ul">
                                <li className="project__nav-li">#React(JavaScript)</li>
                                <li className="project__nav-li">#React Router</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="project__body">
                        <div className="project__img">
                            <img src={Daisuke} alt="daisuke's portfolio image" className="project__img-img" />
                        </div>
                        <div className="project__icon">
                            <a className="project__icon-a" href="https://www.daisukjp.com/" target="_blank">
                                <i class="uil uil-window"></i>
                            </a>
                            <a className="project__icon-a" href="https://github.com/daisukjp/portfolio-daisukesato" target="_blank">
                                <i class="uil uil-github"></i>
                            </a>
                        </div>

                        <div className="project__line"></div>

                        <div className="project__body-content">
                            <section className="project__body-flex">
                                <img src={PortfolioTwo} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Story
                                    </h1>
                                    <p className="project__content-body">
                                    Welcome to my website, which was built using React! As of March 2023, I've updated the design to its latest version. I chose to use mostly white color because I appreciate clean and simple design aesthetics. I believe that the use of white color helps to highlight the content and create a more accessible user experience. I hope that you enjoy exploring my website and learning more about me and my work!
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex-middle">
                                <img src={PortfolioOne} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Logo Design
                                    </h1>
                                    <p className="project__content-body">
                                        The logo design I created was inspired by my passion for baking and my Japanese anime fandom. I used a bread motif to represent my love for baking and incorporated my initials, D and S, into the design. By combining these elements, I created a unique logo that reflects my personality and interests. 
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
                            - Challenged using React
                        </h2>
                        <p className="project__bottom-p">
                            &#8209;
                            It's impressive that I built this site using React, a technology that I'm currently studying. This project has helped me realize the significance of immediately applying the concepts I learn to reinforce my learning process. 
                        </p>

                        <br />

                        <p className="project__bottom-p">
                            &#8209;
                            One of the more challenging aspects of creating this site was incorporating page transitions into React Router version 6, a topic that wasn't covered in my class. Nonetheless, through extensive research, I learned how to do it, and I thoroughly enjoyed the process.
                        </p>
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};