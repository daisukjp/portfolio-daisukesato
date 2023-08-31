import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";
import ProjectData from "../../ProjectData.json";
import EthicalOne from "../../assets/ethical-convini-pic-1.png";
import EthicalTwo from "../../assets/ethical-2.png";
import EthicalThree from "../../assets/ethical-3.png";
import EthicalFour from "../../assets/ethical-4.png";
import { Height } from "@mui/icons-material";

export const Ethical = () => {
  const data = ProjectData.projects.filter(
    (project) => project.slug === "ethical"
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
                src={EthicalOne}
                alt="ethical"
                loading="lazy"
                width="2267"
                height="1280"
                decoding="async"
                data-img="1"
                style={{
                  borderRadius: "10px",
                  borderWidth: "1px",
                  borderColor: "#ededed",
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
                  fontWeight: "400",
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
        </div>

        {/* <section className="project__title">
                    <div className="project__title-div">
                        <h1 className="project__title">
                            {data.title}
                        </h1>
                        <div className="project__nav">
                            <nav>
                            <ul className="project__nav-ul">
                                {data.skills.map((skill, i) => (
                                    <li className="project__nav-li" key={i}>#{skill}</li>
                                ))}
                            </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="project__body">
                        <div className="project__img">
                            <img src={EthicalOne} alt="ethical" className="project__img-img" />
                        </div>
                        <div className="project__icon">
                            <a className="project__icon-a" href="https://ethical-conveni.com/" target="_blank" rel="noopener noreferrer">
                                <i className="uil uil-window"></i>
                            </a>
                        </div>

                        <div className="project__line"></div>

                        <div className="project__body-content">
                            <section className="project__body-flex">
                                <img src={EthicalTwo} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        Story
                                    </h1>
                                    <p className="project__content-body">
                                        During the summer break of 2022, I completed a four-month internship as a front-end developer in Sapporo, Japan. While there, I collaborated with a small team to develop an e-commerce website for a client, utilizing PHP and Laravel 6.
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex-middle">
                                <img src={EthicalThree} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        About Ethical Conveni
                                    </h1>
                                    <p className="project__content-body">
                                        Ethical Conveni is an e-commerce website that offers a range of products made from sustainable and environmentally friendly materials. In addition to selling these items, the company is committed to implementing proactive measures aimed at reducing waste and preventing resources from being needlessly discarded.
                                    </p>
                                </div>
                            </section>

                            <section className="project__body-flex">
                                <img src={EthicalFour} alt="" className="project__body-left project__img-img"/>
                                <div className="project__body-right">
                                    <h1 className="project__content-title">
                                        What I did
                                    </h1>
                                    <p className="project__content-body">
                                        My main responsibility was to conduct a comprehensive validation of the entire page, ensuring that it was optimized for ease-of-use for clients accessing the site, particularly for product management. While it is difficult to describe the process in detail, my efforts were focused on enhancing the overall user experience.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="project__line"></div>

                    <div className="project__bottom">
                        <h1 className="project__bottom-h1">
                            Description
                        </h1>
                        <h2 className="project__bottom-h2">
                            - Challenged Working Remotely
                        </h2>
                        <p className="project__bottom-p">
                            &#8209;
                            As an online intern based in Canada, I worked remotely for a Japanese company. The time zone difference posed a significant challenge, as I was only able to collaborate with my colleagues and supervisor for approximately three hours each day out of an eight-hour workday. During the initial two weeks of my internship, I faced difficulties when encountering issues that required assistance from my team.
                        </p>
                        <br />
                        <p className="project__bottom-p">
                            &#8209;
                            Over time, my search skills improved, enabling me to efficiently troubleshoot any issue that came my way. Through this process, I gained a newfound sense of assurance in my research abilities.
                        </p>
                    </div>
                </section> */}
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};
