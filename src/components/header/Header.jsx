import React, { useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import DSLOGO from "../../assets/dsato-logo.png";
import NavLink from "./NavLink";

const Header = () => {
  /* Background color changer */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    `;

  const location = useLocation();
  const pathname = location.pathname;

  const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing",
    },
  ];

  /* Toggle Menu */
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
      <header className="header" style={{ fontSmooth: "antialiased" }}>
        <nav className="newNav-container">
          <Link href={"/"} className="nav__logo">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={300}
              duration={600}
              triggerOnce
            >
              <img src={DSLOGO} alt="DS logo" />
            </Reveal>
          </Link>

          <ul className="newNav-ul">
            {/* Loop li + NavLink */}
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "bg-secondaryA font-medium"
                      : "font-normal"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
