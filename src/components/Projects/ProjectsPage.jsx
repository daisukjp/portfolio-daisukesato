import React from "react";
import { useState } from "react";
// import "./projectsPage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectMainCard } from "./ProjectMainCard";
// import { useNavigate } from 'react-router-dom'
import { Reveal } from "react-awesome-reveal";
import ProjectData from "../../ProjectData.json";

export const ProjectsPage = () => {
  const [datas, setDatas] = useState(ProjectData.projects);

  const directionArr = ["row", "row-reverse"];
  const chooseDirection = (i) => {
    if (i % 2 === 0) {
      return directionArr[0];
    } else {
      return directionArr[1];
    }
  };

  return (
    <>
      <Header />
      {/* <h1 className="projectPage__projectTitle">
                        Projects
                </h1> */}
      {/* <div className="projectsPage__container-main">
                    {datas.map((data, i) => {
                        const direction = chooseDirection(i)
                        return <ProjectsCard key={data.title}  data={data} direction={direction} />
                    })}
                </div> */}
      <div style={{ marginTop: "7.5rem", maxWidth: "800px", marginRight: "auto", marginLeft: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* <Reveal className="onStep" delay={600} duration={600} triggerOnce> */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            <div style={{gap: "2rem"}}>
              <h1 style={{fontSize: "1.875rem", lineHeight: "2.25rem"}}>Projects</h1>
              <p style={{lineHeight: "1.5rem"}}>Here's a glimpse of the projects I've contributed to.</p>
            </div>
            <ul style={{display: "flex", flexDirection: "column"}}>
              {datas.map((data, i) => {
                        const direction = chooseDirection(i)
                        return <ProjectMainCard key={data.title}  data={data} direction={direction} />
                    })}
            </ul>
          </div>
        {/* </Reveal> */}
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};
