import React, { Fragment } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { keyframes } from "@emotion/react";
import FUWALOGO from "../../assets/fuwafuwa.png";
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
    { label: "Home", href: "/image" },
    { label: "Portfolio", href: "/" },
    { label: "Instagram", href: "https://www.instagram.com/daisukjp/" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@daisukjp1/videos",
    },
  ];

  /* Toggle Menu */

  return (
    <>
      <header className="header" style={{ fontSmooth: "antialiased" }}>
        <nav className="newNav-container">
          <Link to={"/image"} className="nav__logo2">
            <img src={FUWALOGO} alt="fuwa logo" />
          </Link>

          <ul className="newNav-ul">
            {/* Loop li + NavLink */}
            {links.map((link) => (
              <li key={link.label}>
                <NavLink
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "bg-secondaryA font-medium"
                      : "font-normal"
                  }
                  target={link.label === "YouTube" ? "_blank" : "_self"}
                  rel={link.label === "YouTube" ? "noopener noreferrer" : ""}
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
                  {links.map((link) => {
                    // Check if the link is an external link
                    if (link.href.startsWith("http")) {
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          className={
                            pathname === link.href
                              ? "bg-secondaryA mobileNave-items"
                              : "mobileNave-items"
                          }
                          // Open in a new tab for the YouTube link
                          target="_blank"
                          // Security for opening new tabs
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      );
                    } else {
                      return (
                        <Link
                          key={link.label}
                          to={link.href}
                          className={
                            pathname === link.href
                              ? "bg-secondaryA mobileNave-items"
                              : "mobileNave-items"
                          }
                        >
                          {link.label}
                        </Link>
                      );
                    }
                  })}
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
