import React from "react";
import "./service.css";
import { useState } from "react";
import ProjectData from "../../ProjectData.json";
import { ProjectsPost } from "./ProjectsPost";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Service = () => {
  const [datas, setDatas] = useState(ProjectData.projects);

  const directionArr = ["row", "row-reverse"];
  const chooseDirection = (i) => {
    if (i % 2 === 0) {
      return directionArr[0];
    } else {
      return directionArr[1];
    }
  };

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
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
    <section
      className="services section"
      id="service"
      style={{ fontSmooth: "antialiased" }}
    >
      <Reveal
        className="onStep"
        keyframes={fadeInUp}
        delay={600}
        duration={600}
        triggerOnce
      >
        <div className="project__box-container">
          <h2 className="project__h2-1">Projects</h2>
          <ul className="animated-list">
            {datas.map((data, i) => {
              const direction = chooseDirection(i);
              return (
                <ProjectsPost
                  key={data.title}
                  data={data}
                  direction={direction}
                />
              );
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default Service;
