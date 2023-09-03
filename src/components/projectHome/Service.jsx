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
        -webkit-transform: translateY(40px);
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }`;
  return (
    <section
      className="services section"
      id="service"
      style={{ fontSmooth: "antialiased" }}
    >
      <Reveal
        className="onStep"
        keyframes={fadeInUp}
        delay={300}
        duration={600}
        triggerOnce
      >
        <div className="aboutBody-section">
          <h2 className="aboutBody-h2">Projects</h2>
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
