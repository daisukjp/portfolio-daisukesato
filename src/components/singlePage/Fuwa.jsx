import React from 'react';
// import "./project.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FuwaOne from "../../assets/fuwafuwa_garalley.jpg";
import FuwaTwo from "../../assets/fuwa-1.png"
import FuwaThree from "../../assets/fuwa-2.png"
import FuwaFour from "../../assets/fuwa-3.png"

export const Fuwa = () => {

    return (
        <>
        <Header />
            <div className="project__container">
                <section className="project__title">
                    <div className="project__title-div">
                        <h1 className="project__title">
                        Fuwa Fuwa Gallery
                        </h1>
                        <div className="project__nav">
                            <nav>
                            <ul className="project__nav-ul">
                                <li className="project__nav-li">#WordPress</li>
                                <li className="project__nav-li">#PHP</li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="project__body">
                        <div className="project__img">
                            <img src={FuwaOne} alt="daisuke's ethical image" className="project__img-img" />
                        </div>
                        <div className="project__icon">
                            <a className="project__icon-a" href="https://xs272520.xsrv.jp" target="_blank">
                                <i class="uil uil-window"></i>
                            </a>
                            <a className="project__icon-a" href="https://github.com/daisukjp/FuwaFuwa-Gallery/tree/main/FuwaFuwa" target="_blank">
                                <i class="uil uil-github"></i>
                            </a>
                        </div>

                        <div className="project__line"></div>

                        <div className="project__body-content">
                            <section className="project__body-flex">
                                <img src={FuwaTwo} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Story
                                    </h1>
                                    <p className="project__content-body">
                                        I created this gallery site to document the growth of my friend's cat in the fall of 2022 with photos and videos. I used WordPress to build the site. I also made the original theme in PHP.
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex-middle">
                                <img src={FuwaThree} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Fun Part
                                    </h1>
                                    <p className="project__content-body">
                                        On this site, I have created an original theme. I like simple designs, so I designed it to be easy to use for users accessing this site.
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
                            - Challenged making Original Theme
                        </h2>
                        <p className="project__bottom-p">
                        I was in school learning a wordpress course when I designed the theme for this site. I had a hard time with the back-end coding, including the placement of the site's appearance, but it was an excellent opportunity to output what I had learned.
                        </p>

                        <h2 className="project__bottom-h2">
                            - Just for FUN
                        </h2>
                        <p className="project__bottom-p">
                            My motivation when planning this site's creation was Just for FUN. I am a cat person, so creating a site just for cats motivated me.
                        </p>
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};