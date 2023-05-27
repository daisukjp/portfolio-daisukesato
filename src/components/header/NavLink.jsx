import React from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "clsx";


export default function NavLink({ to, children }) {
  const location = useLocation();
  const pathname = `/${location.pathname.split("/")[1]}`;
  const active = pathname === to;

  return (
    <Link
      className={cn(
        "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
        active ? "bg-secondaryA text-primary" : "text-secondary"
      )}
      to={to}
    >
      {children}
    </Link>
  );
}