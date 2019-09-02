import React from "react";
import MainNav from "./nav/MainNav";
import LoginNav from "./nav/LoginNav";
import "../styles/components/NavigationStyles.scss";

function Navigation() {
  return (
    <nav className="Navigation">
      <LoginNav />
      <MainNav />
    </nav>
  );
}

export default Navigation;
