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
                                <li className="project__nav-li">#React(JavaScript)</li>
                                <li className="project__nav-li">#React Router</li>
                                <li className="project__nav-li">#Framer Motion</li>
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
                                        Test
                                    </h1>
                                    <p className="project__content-body">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestias quo in corrupti sequi ut deleniti, ipsam, animi fugit assumenda perferendis laudantium doloremque rerum illum facere ipsum a saepe quaerat!
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex-middle">
                                <img src={EthicalThree} alt="" className="project__body-left project__img-img"/>
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
                                <img src={EthicalFour} alt="" className="project__body-left project__img-img"/>
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