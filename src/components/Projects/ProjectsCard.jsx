import React from 'react';
import "./projectsPage.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState, useCallback } from "react"

const params = {
    data: {
        title: '',
        gif: '',
        thumbnail: '',
        skills: [],
        category: '',
        github: '',
        url: '',
        slug: '',
        description: '',
        },
        color: '',
        direction: ''
    };
    
    // Check that the values assigned to the properties of the params object match the expected types
    if (
        typeof params.data.title !== 'string' ||
        typeof params.data.gif !== 'string' ||
        typeof params.data.thumbnail !== 'string' ||
        !Array.isArray(params.data.skills) ||
        typeof params.data.category !== 'string' ||
        typeof params.data.github !== 'string' ||
        typeof params.data.url !== 'string' ||
        typeof params.data.slug !== 'string' ||
        typeof params.data.description !== 'string' ||
        typeof params.color !== 'string' ||
        typeof params.direction !== 'string'
    ) {
        console.error('Invalid type for one or more params properties');
    }

export const ProjectsCard = (props) => {
    const [hover, setHover] = useState(false)
    const handleHover = useCallback(
        () => {
        setHover(prev => !prev)
        },
        []
        )
    const width = window.innerWidth;
    
        return (
        <>
            <Header />
                <div className="projectsPage__container">
                    <div className="projectPage__item-container">
                        <h1 className="projectPage__item-title">{props.data.title}</h1>
                        
                        <div direction="row" className="projectPage__item-box">
                            <div className="projectPage__item-left">
                            <img src="" alt="project_featured_image" class=""></img>
                            </div>
                            <div className="projectPage__item-right">
                                <p class="sc-dVNjXY ggfdHt">Featured</p>
                                <ul class="sc-jWUzzU cqOYRN">
                                    <li class="sc-eFegNN gpxnaA">MongoDB</li>
                                    <li class="sc-eFegNN gpxnaA">Express.js</li>
                                    <li class="sc-eFegNN gpxnaA">React</li>
                                    <li class="sc-eFegNN gpxnaA">Node.js</li>
                                    <li class="sc-eFegNN gpxnaA">Firebase</li>
                                </ul>
                                <p class="sc-jlRLRk eZqcSK">
                                    MERN stack event advertisement web application. We can recruit participants for the event.
                                </p>
                                <div class="ProjectsPage__direct">
                                    <div className="sc-dlVxhl psblj"></div>
                                    <a className="sc-iwjdpV ilgNXF" href="https://xs272520.xsrv.jp/" target="_blank" rel="noopener noreferrer">View
                                    <i className="uil uil-window"></i>
                                    </a>
                                    <div className="sc-dlVxhl psblj"></div>
                                    <a className="sc-iwjdpV ilgNXF" href="https://github.com/daisukjp/FuwaFuwa-Gallery" target="_blank" rel="noopener noreferrer">GitHub
                                    <i className="uil uil-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
        )
};