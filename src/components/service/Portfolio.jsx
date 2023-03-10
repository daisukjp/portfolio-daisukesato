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
                    </div>
                </section>
            </div>
        <Footer />
        </>
    );
};