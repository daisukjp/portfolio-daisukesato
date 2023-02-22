import React from 'react'
import "./service.css"
import { useState } from 'react'

const Service = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="service">
            <h2 className="section__title">Service</h2>
            <h3 className="section__subtitle">What I offer</h3>

            <div className="service_container container grid">
                <div className="service__content">
                    <i className="uil uil service__icon"></i>
                    <h3 className="service__title">Hello</h3>

                    <span className="service__button" onClick={() => toggleTab(1)
                    }>View more <i className="uil uil-arrow-right"></i></span>

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