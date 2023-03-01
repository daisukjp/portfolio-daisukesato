import React from 'react'
import Typed from './Typed'



const AboutData = () => {
    return (
        <div className="profile__section section">
            <h1 class="sc-hKwDye iyooZD">
                <div class="Typewriter" data-testid="typewriter-wrapper">
                    <div>
                        <Typed />
                    </div>
                    <ul className="about__ul">
                        <li className="about__li">
                            <span>
                                Passionate about web development
                                <br />
                                I am a front-end developer who is eager to learn about new technologies.
                            </span>
                        </li>

                        <li className="about__li">
                            <span>
                                High potential as a developer
                                <br />
                                I'm pleased to code, learn about new things, solve problems.
                            </span>
                        </li>
                        <li className="about__li">
                            <span>
                                Bachelor of Multi-media
                                <br />
                                I've had a bachelor of multi-media. Now, I'm furthering my professional web development studies at Cornerstone International Community College of Canada. I'm looking for a job as a front-end developer.
                            </span>
                        </li>
                    </ul>
                    
                </div>
            </h1>
        </div>
    )
}

export default AboutData
