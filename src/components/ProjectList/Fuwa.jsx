import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import ProjectData from "../../ProjectData.json";
import FuwaOne from "../../assets/fuwafuwa_garalley.jpg";
import FuwaTwo from "../../assets/fuwa-1.png";
import FuwaThree from "../../assets/fuwa-2.png";
import { Link } from "react-router-dom";

export const Fuwa = () => {
  const data = ProjectData.projects.filter(
    (project) => project.slug === "fuwafuwa"
  )[0];
  return (
    <>
      <Header />
      <div>
        <div className="project_top-child-container">
          <div
            className="project_top-intro"
            style={{ fontSize: "16px", color: "#6F6F6F" }}
          >
            <p>2022</p>
            <span>·</span>
            <a
              href="asaaa"
              style={{
                fontSize: "16px",
                color: "#6F6F6F",
                textUnderlineOffset: "4px",
                textDecorationLine: "underline",
                textDecoration: "inherit",
              }}
            >
              Link
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ad
            facilis hic non sunt iste culpa, nihil alias sit sint nemo eveniet
            excepturi. Autem excepturi temporibus eaque, magnam iste aliquid.
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
                src={FuwaOne}
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
              <figcaption
                style={{
                  margin: "0.5rem auto 2rem",
                  maxWidth: "28rem",
                  textAlign: "center",
                  fontSize: ".875rem",
                  lineHeight: "1.25rem",
                  fontWeight: "300",
                  lineHeight: "1.25",
                  color: "#8f8f8f",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Blanditiis neque, illo iure laborum asperiores totam. Incidunt
                recusandae dolores obcaecati? Dolorem ratione ipsam quidem nisi
                temporibus unde quam alias fuga quibusdam?
              </figcaption>
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
                src={FuwaTwo}
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
                src={FuwaThree}
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
      <Footer />
      <ScrollUp />
    </>
  );
};
