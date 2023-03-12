import React from 'react'
import "./work.css"
import Works from './Works'


const Work = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section__title">Work</h2>
            <h3 className="section__subtitle">Recent works</h3>

            <Works />
        </section>
    )
}

export default Work