import React from 'react';
import "./projectsPost.css";
import { useState, useCallback } from "react"
import { Link } from 'react-router-dom';
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

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
    const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    `;
    const handleHover = useCallback(
        () => {
        setHover(prev => !prev)
        },
        []
        )
    
        return (
            <>
            <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <li className="ProjectMainItem">
                    <Link 
                    className="projectMainCardLink"
                    to={`./` + props.data.slug} 
                    style={{
                        borderRadius: "0.5rem", 
                        borderWidth: "0.1px",
                        backgroundColor: "#ededed", 
                        borderColor: "#ededed", 
                        color: "#ededed",
                        aspectRatio: "16/9", 
                        overflow: "clip",
                        border: "solid"
                    }}
                    >
                        <img src={props.data.thumbnail} alt="project_featured_image" 
                            style={{
                                height: "100%", 
                                width: "100%", 
                                top: "0", 
                                bottom: "0", 
                                left: "0", 
                                right: "0", 
                                objectFit: "cover",
                            }}
                        >
    
                        </img>
                    </Link>  
                    <section 
                        className='projectMainSection'
                    >
                        <div>
                            <Link 
                            className="projectMainTitle"
                            to={`./` + props.data.slug} 
                            >{props.data.title}</Link>
                            <p 
                                style={{
                                    overflow: "hidden",
                                    lineClamp: "3",
                                    marginTop: "calc(0.25rem * calc(1 - 0))",
                                    marginBottom: "calc(0.25rem * 0)",
                                }}
                            >
                                {props.data.description}
                                {/* {props.data.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))} */}
                            </p>
                        </div>
                    </section>
                </li>
    
            </Reveal>
            </>
        )
};