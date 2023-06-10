import React from 'react';
import "./projectsPost.css";
import { useState, useCallback } from "react"
import { Link } from 'react-router-dom';

// images 

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

export const ProjectsPost = (props) => {
    const [hover, setHover] = useState(false)
    const handleHover = useCallback(
        () => {
        setHover(prev => !prev)
        },
        []
        )
    
        return (
        <>
            <li className="projects__box-li">
                <div className="projects__box-item-container">
                    <section className="project__section-item">
                        <h2>{props.data.title}</h2>
                        <ul className="projectPage__il">
                            {props.data.skills.map((skill, i) => (
                                <li key={i}>#{skill}</li>
                            ))}
                        </ul>
                        <a href="">{props.data.description}</a>
                    </section>

                    <div className="project__items-img">
                        <img src={props.data.thumbnail} alt="project_featured_image" className=""></img>
                    </div>
                </div>
            </li>
        </>
        )
};