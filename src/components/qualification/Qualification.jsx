import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="qualification section">
        <h2 className="section__title">Experiences</h2>
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
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Work
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
                            <h3 className="qualification__title">Northern Alberta Institute of Technology</h3>
                            <span className="qualification__subtitle">
                                DMIT Web Design & Development
                                <br />
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
                            <h3 className="qualification__title">Surugadai University</h3>
                            <span className="qualification__subtitle">
                                Contemporary Culture literature
                            <br />
                                Saitama, Japan
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2017 - 2021
                            </div>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active button--flex" 
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Front-End Developer Intern</h3>
                            <span className="qualification__subtitle">
                                Diamond Head Inc.
                                <br/>
                                Sapporo - Japan
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2022 May - August
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
                            <h3 className="qualification__title">Inside Sales Team Lead Intern</h3>
                            <span className="qualification__subtitle">
                                Smiloops Inc.
                                <br/>
                                Tokyo - Japan
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "}2020 - 2021
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
    );
}

export default Qualification