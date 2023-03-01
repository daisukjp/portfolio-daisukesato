import React from 'react'
import "./service.css"
import { useState } from 'react'

import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";


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
                    <h3 className="work__title">Title</h3>
                    <span className="work__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </span>
                    </div>

                    
                </div>

                    {/* <div className="service__model active-model"> */}
                        <div className={toggleState === 1 ? "service__model active-model" : "service__model"}>
                        <div className="service__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                            </i>
                            <h3 className="service__model-title">
                                hello
                            </h3>
                            <p className="service__model-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis necessitatibus impedit repudiandae eum illo esse sapiente quidem eveniet culpa reiciendis eius, sint id cumque fugiat ullam possimus qui eaque cupiditate!
                            </p>
                            <ul className="service__model-services grid">
                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>

                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>

                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="service__content">
                    
                <div className="work__card">
                    <img src={Work2} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">Title</h3>
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
                            <h3 className="service__model-title">
                                hello
                            </h3>
                            <p className="service__model-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis necessitatibus impedit repudiandae eum illo esse sapiente quidem eveniet culpa reiciendis eius, sint id cumque fugiat ullam possimus qui eaque cupiditate!
                            </p>
                            <ul className="service__model-services grid">
                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>

                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>

                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="service__content">
                    
                <div className="work__card">
                    <img src={Work3} alt="work__img" className="work__img" />
                    <div className="card__content">
                    <h3 className="work__title">Title</h3>
                    <span className="work__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="bx bx-right-arrow-alt work__button-icon"></i>
                    </span>
                    </div>

                    
                </div>

                    {/* <div className="service__model active-model"> */}
                        <div className={toggleState === 1 ? "service__model active-model" : "service__model"}>
                        <div className="service__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                            </i>
                            <h3 className="service__model-title">
                                hello
                            </h3>
                            <p className="service__model-description">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis necessitatibus impedit repudiandae eum illo esse sapiente quidem eveniet culpa reiciendis eius, sint id cumque fugiat ullam possimus qui eaque cupiditate!
                            </p>
                            <ul className="service__model-services grid">
                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>

                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>

                                <li className="service__model-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service__model-info">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Service