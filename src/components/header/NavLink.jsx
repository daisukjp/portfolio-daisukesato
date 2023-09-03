import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const NavLink = (props) => {
  const { href, children, className } = props;
  const location = useLocation();
  const pathname = location.pathname;
  const active = pathname === href;

  const combinedClassName = active
    ? `${className} NavLink-body`
    : "NavLink-body";

  return (
    <Link to={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
