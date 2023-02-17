import React from 'react'
import "./qualification.css";

const Qualification = () => {
    return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <h3 className="section__subtitle">My personal journey</h3>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experiences
                </div>
            </div>
        </div>
    </section>
    )
}

export default Qualification