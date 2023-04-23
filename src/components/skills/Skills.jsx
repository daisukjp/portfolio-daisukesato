import React from 'react';
import "./skills.css";
import AboutData from './AboutData';
// import Frontend from './Frontend';
// import Backend from './Backend';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <AboutData />
            <div className="skills__container container grid">
            </div>
        </section>
    )
}

export default Skills