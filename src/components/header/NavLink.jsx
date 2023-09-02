import React from "react";
import "./header.css";
import cn from "clsx";
import { Link, useLocation } from "react-router-dom";

const NavLink = (props) => {
  const { href, children } = props;
  const location = useLocation();
  const pathname = location.pathname;
  const active = pathname === href;

  return (
    <>
      <a href={href} className="NavLink-body">
        {children}
      </a>
    </>
  );
};

export default NavLink;
