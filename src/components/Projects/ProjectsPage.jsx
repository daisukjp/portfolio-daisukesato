import React from 'react';
import { useState } from 'react'
import "./projectsPage.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import { ProjectsCard } from './ProjectsCard';
import { useNavigate } from 'react-router-dom'
import ProjectData from '../../ProjectData.json'

export const ProjectsPage = () => {
    const [datas, setDatas] = useState(ProjectData.projects)

    const directionArr = ['row', 'row-reverse'];
    const chooseDirection = (i) => {
        if (i % 2 === 0) {
            return directionArr[0];
        } else {
            return directionArr[1];
        }
    };

    const width = window.innerWidth
    const navigate = useNavigate()
        return (
        <>
            <Header />
                <h1 className="projectPage__projectTitle">
                        Projects
                </h1>
                <div className="projectsPage__container-main">
                    {datas.map((data, i) => {
                        const direction = chooseDirection(i)
                        return <ProjectsCard key={data.title}  data={data} direction={direction} />
                    })}
                </div>
            <Footer />
            <ScrollUp />
    
        </>
        )
};
