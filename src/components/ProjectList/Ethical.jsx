import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import ProjectData from "../../ProjectData.json";
import EthicalOne from "../../assets/ethical-convini-pic-1.png";
import EthicalTwo from "../../assets/ethical-2.png";
import EthicalThree from "../../assets/ethical-3.png";
import EthicalFour from "../../assets/ethical-4.png";
import { Link } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export const Ethical = () => {
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

  const data = ProjectData.projects.filter(
    (project) => project.slug === "ethical"
  )[0];
  return (
    <>
      <Header />
      <Reveal
        className="onStep"
        keyframes={fadeInUp}
        delay={300}
        duration={600}
        triggerOnce
      >
        <div>
          <div className="project_top-child-container">
            <div
              className="project_top-intro"
              style={{ fontSize: "16px", color: "#6F6F6F" }}
            >
              <p>2022</p>
              <span>·</span>
              <a href="https://ethical-conveni.com/" className="p-items-link">
                Visit Project ↗
              </a>
            </div>
            <h1
              style={{
                fontSize: "1.875rem",
                fontWeight: "700",
                lineHeight: "1.25",
                letterSpacing: "-.025em",
                color: "#171717",
              }}
              className="project__title"
            >
              {data.title}
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.75rem",
                color: "#6f6f6f",
                animation: "in .6s both",
                animationDelay: "calc(var(--index) * .13s)",
              }}
            >
              During a four-month internship in the summer of 2022, pivotal
              contributions were made to its development, with a particular
              emphasis on comprehensive site validation.
            </p>
          </div>
          <div style={{ Height: "2rem" }}></div>
          <div className="project_top-child-body">
            <div
              style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
            >
              <figure
                style={{
                  gap: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={EthicalOne}
                  alt="ethical"
                  loading="lazy"
                  width="2267"
                  height="1280"
                  decoding="async"
                  data-img="1"
                  style={{
                    borderRadius: "10px",
                    border: "0.1px solid #e5e7eb",
                    backgroundColor: "#f3f3f3",
                    color: "transparent",
                  }}
                />
              </figure>
            </div>

            <div
              style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
            >
              <figure
                style={{
                  gap: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={EthicalThree}
                  alt="ethical"
                  loading="lazy"
                  width="2267"
                  height="1280"
                  decoding="async"
                  data-img="1"
                  style={{
                    borderRadius: "10px",
                    border: "0.1px solid #e5e7eb",
                    backgroundColor: "#f3f3f3",
                    color: "transparent",
                  }}
                />
              </figure>
            </div>

            <div
              style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
            >
              <figure
                style={{
                  gap: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={EthicalTwo}
                  alt="ethical"
                  loading="lazy"
                  width="2267"
                  height="1280"
                  decoding="async"
                  data-img="1"
                  style={{
                    borderRadius: "10px",
                    border: "0.1px solid #e5e7eb",
                    backgroundColor: "#f3f3f3",
                    color: "transparent",
                  }}
                />
              </figure>
            </div>

            <div
              style={{ width: "100%", marginTop: "2rem", marginBottom: "2rem" }}
            >
              <figure
                style={{
                  gap: "0.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={EthicalFour}
                  alt="ethical"
                  loading="lazy"
                  width="2267"
                  height="1280"
                  decoding="async"
                  data-img="1"
                  style={{
                    borderRadius: "10px",
                    border: "0.1px solid #e5e7eb",
                    backgroundColor: "#f3f3f3",
                    color: "transparent",
                  }}
                />
              </figure>
            </div>
          </div>

          <div
            className="project_top-child-bottom"
            style={{ marginBottom: "2rem" }}
          >
            <Link
              to="/projects"
              style={{
                textDecorationLine: "underline",
                color: "#171717",
              }}
            >
              ← All Projects
            </Link>
          </div>
        </div>
      </Reveal>
      <Footer />
      <ScrollUp />
    </>
  );
};
