import React from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/components/LinkStyles.scss";

function Link({
  to = "#",
  content = "",
  variant = "dark",
  funtional = false,
  icon = false,
  exact = false
}) {
  const linkClass = `Link Link--${variant}`;
  if (funtional) {
    return (
      <NavLink
        to={to}
        exact={exact}
        className={linkClass}
        activeClassName="Link--selected"
      >
        {icon && <i className={icon}></i>}
        {content}
      </NavLink>
    );
  }

  return (
    <RouterLink className={linkClass} to={to}>
      {icon && <i className={icon}></i>}
      {content}
    </RouterLink>
  );
}

export default Link;
