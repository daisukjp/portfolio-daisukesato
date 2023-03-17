import React from 'react'
import Typed from './Typed'



const Vltr = () => {
    return (
        <div className="profile__section section">
                <div className="Typewriter" data-testid="typewriter-wrapper">
                <h2 className="section__title">Volunteer Work</h2>
                    <ul className="about__ul">
                        <li className="about__li">
                            <span className="volunteer__span">
                                Teaching Japanese at the University of California San Diego
                            </span>
                            <p className="vl_plp">May 2019 - December 2019</p>
                            <br />
                            As a passionate and dedicated exchange student at the illustrious University of California, San Diego, I leaped at the chance to volunteer as a Conversation Leader in a Japanese language class for a duration of six months. This dynamic and rewarding role allowed me to impart my knowledge of the Japanese language to a diverse group of students, ranging from beginners to advanced learners. The experience not only bolstered my own language skills but also provided me with a sense of fulfillment in helping others achieve their language-learning goals. I cherished the opportunity to serve in this capacity and am grateful for the invaluable lessons and memories I gained from this experience.
                        </li>

                        <li className="about__li">
                            <span className="volunteer__span">
                                ActivCare Mission Bay, San Diego
                            </span>
                            <p className="vl_plp">March 2019 - March 2020</p>
                            <br />
                            As a dedicated volunteer, I devoted my time and energy for approximately five months to assisting individuals with memory impairment in various facets of their daily routine, including meal consumption, verbal communication, and other essential activities. This humbling experience taught me the immense value of patience, empathy, and active listening in providing quality care to those in need. My role not only allowed me to make a positive impact on the lives of others but also provided me with a deeper appreciation for the resilience and strength of the human spirit.
                        </li>

                    </ul>
                    
                </div>
        </div>
    )
}

export default Vltr
