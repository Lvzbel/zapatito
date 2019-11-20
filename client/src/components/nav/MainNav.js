import React, { Component } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Link from "../Link";
import "../../styles/components/nav/MainNavStyles.scss";

export class MainNav extends Component {
  render() {
    return (
      <nav className="MainNav">
        <div className="MainNav__container container">
          <div className="MainNav__container--sub">
            <LinkRouter className="MainNav__logo" to="/">
              <p>Zapatito</p>
            </LinkRouter>

            <div className="MainNav__burger">
              <span></span>
              <span></span>
              <span></span>
              <input type="checkbox" />
            </div>
          </div>

          <ul className="MainNav__links">
            <li className="MainNav__link">
              <Link to="/" exact={true} content="home" funtional={true} />
            </li>
            <li className="MainNav__link">
              <Link to="/shop" content="shop" funtional={true} />
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
