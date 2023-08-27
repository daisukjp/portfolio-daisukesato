import React from 'react';
// import "./projectsPost.css";
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

export const ProjectMainCard = (props) => {
    const [hover, setHover] = useState(false)
    const handleHover = useCallback(
        () => {
        setHover(prev => !prev)
        },
        []
        )
    
        return (
        <>
            <li style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                <Link to={`projects/` + props.data.slug} style={{borderRadius: "0.5rem", backgroundColor: "#ededed", borderColor: "#ededed"}}>
                    <img src={props.data.thumbnail} alt="project_featured_image"></img>
                </Link>  
                <section >
                    <div>
                        <h2>{props.data.title}</h2>
                        <ul className="projectPage__il">
                            {props.data.skills.map((skill, i) => (
                                <li key={i}>#{skill}</li>
                            ))}
                        </ul>
                    </div>
                    {/* <p className="project__desc-p">{props.data.description}</p> */}
                    <Link to={`projects/` + props.data.slug} className="project__link">
                    <span className="d-flex align-items-center gap-2 fw-semibold">
                        <span>More about the project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                        </svg>
                    </span>
                    </Link>
                </section>
            </li>
        </>
        )
};