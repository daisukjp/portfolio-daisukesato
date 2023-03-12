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
                                <li className="project__nav-li">#React(JavaScript)</li>
                                <li className="project__nav-li">#React Router</li>
                                <li className="project__nav-li">#Framer Motion</li>
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
                                        Test
                                    </h1>
                                    <p className="project__content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias quo in corrupti sequi ut deleniti, ipsam, animi fugit assumenda perferendis laudantium doloremque rerum illum facere ipsum a saepe quaerat!
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex-middle">
                                <img src={FuwaThree} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Test
                                    </h1>
                                    <p className="project__content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias quo in corrupti sequi ut deleniti, ipsam, animi fugit assumenda perferendis laudantium doloremque rerum illum facere ipsum a saepe quaerat!
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex">
                                <img src={FuwaFour} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Test
                                    </h1>
                                    <p className="project__content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias quo in corrupti sequi ut deleniti, ipsam, animi fugit assumenda perferendis laudantium doloremque rerum illum facere ipsum a saepe quaerat!
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
                            1 - Challenged using React
                        </h2>
                        <p className="project__bottom-p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci ipsa id consequatur, eligendi omnis quae doloremque! Iusto, quae saepe ratione laudantium nesciunt sapiente nulla, explicabo facere aliquid quibusdam dicta.
                        </p>

                        <h2 className="project__bottom-h2">
                            2 - something else
                        </h2>
                        <p className="project__bottom-p">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci ipsa id consequatur, eligendi omnis quae doloremque! Iusto, quae saepe ratione laudantium nesciunt sapiente nulla, explicabo facere aliquid quibusdam dicta.
                        </p>
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};