import React from "react";
import "./projectsPost.css";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

// images

const params = {
  data: {
    title: "",
    gif: "",
    thumbnail: "",
    skills: [],
    category: "",
    github: "",
    url: "",
    slug: "",
    description: "",
  },
  color: "",
  direction: "",
};

// Check that the values assigned to the properties of the params object match the expected types
if (
  typeof params.data.title !== "string" ||
  // typeof params.data.gif !== 'string' ||
  typeof params.data.thumbnail !== "string" ||
  !Array.isArray(params.data.skills) ||
  typeof params.data.category !== "string" ||
  typeof params.data.github !== "string" ||
  typeof params.data.url !== "string" ||
  typeof params.data.slug !== "string" ||
  typeof params.data.description !== "string" ||
  typeof params.color !== "string" ||
  typeof params.direction !== "string"
) {
  console.error("Invalid type for one or more params properties");
}

export const ProjectsPost = (props) => {
  const [hover, setHover] = useState(false);
  const handleHover = useCallback(() => {
    setHover((prev) => !prev);
  }, []);

  return (
    <>
      <li className="projects__box-li">
        <div className="transition-opacity">
          <div className="projects__box-item-container">
            <div className="project__items-img">
              <Link to={`projects/` + props.data.slug}>
                <img
                  src={props.data.thumbnail}
                  alt="project_featured_image"
                ></img>
              </Link>
            </div>
            <section>
              <div className="project__section-item">
                <h2 style={{ fontSize: "16px", color: "#6f6f6f" }}>
                  {props.data.title}
                </h2>
                <Link>{props.data.description}</Link>
              </div>
            </section>
          </div>
        </div>
      </li>
    </>
  );
};
