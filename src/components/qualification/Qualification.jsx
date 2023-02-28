import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <h3 className="section__subtitle">My personal journey</h3>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button  button--flex"
                    }
                    
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={
                    toggleState === 2 
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button  button--flex"
                    }
                    
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experiences
                </div>
            </div>
            <div className="qualification__sections">
                <div className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active button--flex" 
                    : "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">NAIT - DMIT</h3>
                            <span className="qualification__subtitle">
                                Edmonton, AB
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2021 September - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">UC San Diego</h3>
                            <span className="qualification__subtitle">
                                San Diego - CA
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2019 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Surugadai University</h3>
                            <span className="qualification__subtitle">
                                Saitama, Japan
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2017 - 2021
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active button--flex" 
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Contemporary Culture </h3>
                            <span className="qualification__subtitle">
                                Canada - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2021 - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">
                                Canada - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2021 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">
                                Canada - Institute
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2021 - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
    );
}

export default Qualification