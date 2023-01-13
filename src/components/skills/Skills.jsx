import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <h3 className="section__subtitle">My technical level</h3>


            <div className="skills__container container grid">
                <Frontend />

                <Backend />
            </div>
        </section>
    )
}

export default Skills