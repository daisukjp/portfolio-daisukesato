import React from 'react';
import "./projectsPage.css";
import { Link } from 'react-router-dom';

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
        // typeof params.data.gif !== 'string' ||
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
        return (
        <>
                <div className="projectsPage__container">
                    <div className="projectPage__item-container">
                        <h1 className="projectPage__item-title">{props.data.title}</h1>
                        
                        <div direction="row" className="projectPage__item-box">
                            <div className="projectPage__item-left">
                            <img src={props.data.thumbnail} alt="project_featured_image" className="ProjectPage__image"></img>
                            </div>
                            <div className="projectPage__item-right">
                                <ul className="projectPage__il">
                                    {props.data.skills.map((skill, i) => (
                                        <li key={i}>#{skill}</li>
                                    ))}
                                </ul>
                                <p className="projectPage__description">
                                    {props.data.description}
                                </p>
                                <div className="projectPage__direct">
                                    <a className="sc-iwjdpV ilgNXF" href={props.data.url} target="_blank" rel="noopener noreferrer">
                                    <i className="uil uil-window"></i>
                                    </a>
                                    <a className="sc-iwjdpV ilgNXF" href={props.data.github} target="_blank" rel="noopener noreferrer">
                                    <i className="uil uil-github"></i>
                                    </a>
                                </div>
                                <Link to={props.data.slug}><div className="projectPage__button">MORE...</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
        )
};