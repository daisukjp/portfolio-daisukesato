import React from "react";
import { useState } from "react";
import "./projectsPage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import { ProjectsCard } from "./ProjectsCard";
import { ProjectMainCard } from "./ProjectMainCard";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
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

  const fadeInUp = keyframes`
  0% {
      opacity: 0;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }`;

  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;

  return (
    <>
      <Header />

      <div
        style={{
          marginTop: "7.5rem",
          maxWidth: "800px",
          marginRight: "auto",
          marginLeft: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <Reveal
          className="onStep"
          keyframes={fadeInUp}
          delay={600}
          duration={600}
          triggerOnce
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "4rem" }}
          >
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <div style={{ gap: "2rem" }}>
                <h1 style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}>
                  Projects
                </h1>
                <p style={{ lineHeight: "1.5rem" }}>
                  Here's a glimpse of the projects I've contributed to.
                </p>
              </div>
            </Reveal>
            <ul
              className="animated-list"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {datas.map((data, i) => {
                const direction = chooseDirection(i);
                return (
                  <ProjectMainCard
                    key={data.title}
                    data={data}
                    direction={direction}
                  />
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};
