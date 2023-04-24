import React from 'react';
import { useState } from 'react'
import "./projectsPage.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import { ProjectsCard } from './ProjectsCard';
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import ProjectData from '../../ProjectData.json'

export const ProjectsPage = () => {
    const [projectsData] = useState(ProjectData.projects);

    const directionArr = ['row', 'row-reverse'];
    const chooseDirection = (i) => {
        if (i % 2 === 0) {
            return directionArr[0];
        } else {
            return directionArr[1];
        }
    };

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

    return (
        <>
            <Header />
            <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                <h1 className="projectPage__projectTitle">Projects</h1>
                <div className="projectsPage__container-main">
                    {projectsData.map((project, index) => {
                        const direction = chooseDirection(index);
                        return (
                            <ProjectsCard key={project.title} data={project} direction={direction} />
                        )
                    })}
                </div>
            </Reveal>
            <Footer />
            <ScrollUp />
        </>
    )
};