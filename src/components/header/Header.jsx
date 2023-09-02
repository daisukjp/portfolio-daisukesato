import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
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

  const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Project", href: "/#project" },
    { label: "Contact", href: "/#contact" },
    { label: "Resume", href: "/#resume" },
  ];

  /* Toggle Menu */
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
      <header className="header" style={{ fontSmooth: "antialiased" }}>
        {/* <nav className="nav container nav-width">
                <a href="/" className="nav__logo">
                <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                    <img src={DSLOGO} alt="DS logo" />
                </Reveal>
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                            <a href="/#home" 
                            onClick={() => setActiveNav('#home')} className={
                            activeNav === "#home" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-estate nav__icon'></i>
                                Home
                            </a>
                        </Reveal>
                        </li>

                        <li className='nav__item'>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                            <Link to="/projects"
                            onClick={() => setActiveNav('#service')} className={
                            activeNav === "#service" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-briefcase-alt nav__icon'></i>
                                Projects
                            </Link>
                        </Reveal>
                        </li>

                        <li className='nav__item'>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                            <a href="/#skills" 
                                onClick={() => setActiveNav('#skills')} className={
                                activeNav === "#skills" ? "nav__link active-link" : "nav_link"
                                }
                                >
                                <i className='uil uil-file-alt nav__icon'></i>
                                About
                            </a>
                        </Reveal>
                        </li>


                        <li className='nav__item'>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                            <a href="/#contact"
                            onClick={() => setActiveNav('#contact')} className={
                            activeNav === "#contact" ? "nav__link active-link" : "nav_link"
                            }
                            >
                                <i className='uil uil-message nav__icon'></i>
                                Contact
                            </a>
                        </Reveal>
                        </li>

                        <li className='nav__item'>
                        <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                            <a href="https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing"
                            onClick={() => setActiveNav('#resume')} className={
                            activeNav === "#resume" ? "nav__link active-link" : "nav_link"
                            }
                            target="_blank" rel="noopener noreferrer">
                                <i className='uil uil-message nav__icon'></i>
                                Resume
                            </a>
                        </Reveal>
                        </li>
                    </ul>
                    <div className="snsArea pc_show">
                    <p className="ttl en_go"> &nbsp;</p>
                        <ul className="snsList">
                            <li className="even"><a href="https://github.com/daisukjp" target="_blank" rel="noopener noreferrer"><i className="uil uil-github-alt"></i></a></li>
                            <li className="last"><a href="https://www.linkedin.com/in/daisuke-sato-2b82241a0/" target="_blank" rel="noopener noreferrer"> <i className="uil uil-linkedin-alt"></i></a></li>
                            <li className="first"><a href="https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="uil uil-file-download-alt"></i></a></li>
                        </ul>
                    </div>

                    <i className="uil uil-times nav__close" onClick={() => ShowMenu(!Toggle)}></i>
                </div>

                <div className='nav__toggle' onClick={() => ShowMenu(!Toggle)}>
                <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={200} triggerOnce>
                    <i className="uil uil-apps"></i>
                </Reveal>
                </div>
            </nav> */}
        <nav className="newNav-container">
          <Link to={"/"} className="nav__logo">
            <Reveal
              className="onStep"
              keyframes={fadeInUp}
              delay={200}
              duration={200}
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
