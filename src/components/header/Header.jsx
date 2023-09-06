import React, { Fragment } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
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
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1ioacoxNJMVuzSonjpXlriBa1vPifJH_R/view?usp=sharing",
    },
  ];

  /* Toggle Menu */

  return (
    <>
      <header className="header" style={{ fontSmooth: "antialiased" }}>
        <nav className="newNav-container">
          <Link to={"/"} className="nav__logo">
            <img src={DSLOGO} alt="DS logo" />
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
                  target={link.label === "Resume" ? "_blank" : "_self"}
                  rel={link.label === "Resume" ? "noopener noreferrer" : ""}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Popover className="mobileNave-top">
            <Popover.Button
              className="mobileNave-button"
              style={{ backgroundColor: "#fafafa" }}
            >
              Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: "1.25rem", height: "1.25rem" }}
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="mobileNave-panel">
                <div className="mobileNave-grid">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={
                        pathname === link.href
                          ? "bg-secondaryA mobileNave-items"
                          : "mobileNave-items"
                      }
                      target={link.label === "Resume" ? "_blank" : "_self"}
                      rel={link.label === "Resume" ? "noopener noreferrer" : ""}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </nav>
      </header>
    </>
  );
};

export default Header;
