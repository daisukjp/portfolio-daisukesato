import React from 'react';
import "./project.css"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Daisuke from "../../assets/daisuke_portforio.jpg";
import Portfolio_project from "../../assets/prtfolio_project.png";

export const Portfolio = () => {

    return (
        <>
        <Header />
            <div className="project__container">
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
                                <li className="project__nav-li">#Framer Motion</li>
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
                                <img src={Portfolio_project} alt="" className="project__body-left project__img-img"/>
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
                                <img src={Portfolio_project} alt="" className="project__body-left project__img-img"/>
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
                                <img src={Portfolio_project} alt="" className="project__body-left project__img-img"/>
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