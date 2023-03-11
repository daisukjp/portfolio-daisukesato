import React from 'react';
import "./project.css"
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Daisuke from "../../assets/daisuke_portforio.jpg";

export const Portfolio = () => {

    return (
        <>
        <Header />
            <div className="project__container">
                <section className="project__title">
                    <div className="project__title-div">
                        <h2 className="project__title">
                        My Portfolio Page
                        </h2>
                        <div className="project__nav">
                            <nav>
                            <ul class="project__nav-ul">
                                <li class="sc-fbyfCU ldXLbY">React(JavaScript)</li>
                                <li class="sc-fbyfCU ldXLbY">React Router</li>
                                <li class="sc-fbyfCU ldXLbY">Framer Motion</li>
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

                        <div className="project__body-content">
                            <section className="project__body-flex">
                                <div className="project__body-left">
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
                </section>
            </div>
        <Footer />
        </>
    );
};