import React, { Component } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Link from "../Link";
import "../../styles/components/nav/MainNavStyles.scss";

export class MainNav extends Component {
  render() {
    return (
      <nav className="MainNav">
        <div className="MainNav__container container">
          <LinkRouter className="MainNav__logo" to="/">
            <p>Zapatio</p>
          </LinkRouter>
          <ul className="MainNav__links">
            <li className="MainNav__link">
              <Link to="/" content="home" funtional={true} />
            </li>
            <li className="MainNav__link">
              <Link to="/shop" content="shop" funtional={true} />
            </li>
            <li className="MainNav__link">
              <Link to="/sale" content="sale" funtional={true} />
            </li>
            <li className="MainNav__link">
              <Link to="/about" content="about us" funtional={true} />
            </li>
            <li className="MainNav__link">
              <Link to="/contact" content="contact us" funtional={true} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;
