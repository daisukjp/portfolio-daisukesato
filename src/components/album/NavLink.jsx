import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const NavLink = (props) => {
  const { href, children, className, target, rel } = props;
  const location = useLocation();
  const pathname = location.pathname;
  const active = pathname === href;

  const combinedClassName = active
    ? `${className} NavLink-body`
    : "NavLink-body";

  // Check if the href is an external link
  if (href.startsWith("http")) {
    return (
      <a href={href} className={combinedClassName} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  // Internal link
  return (
    <Link to={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
