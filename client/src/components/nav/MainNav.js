import React, { Component } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Link from "../Link";
import "../../styles/components/nav/MainNavStyles.scss";

export class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = { navigationActive: false };
  }

  toggleNavigation = () => {
    const newState = !this.state.navigationActive;
    this.setState({ navigationActive: newState });
  };

  closeNavigation = () => {
    console.log("Activation");
    this.setState({ navigationActive: false });
  };

  render() {
    return (
      <nav className="MainNav">
        <div className="MainNav__container container">
          <div className="MainNav__container--sub">
            <LinkRouter className="MainNav__logo" to="/">
              <p>Zapatito</p>
            </LinkRouter>

            <button className="MainNav__burger" onClick={this.toggleNavigation}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <ul
            className={`MainNav__links ${this.state.navigationActive &&
              "MainNav__active"}`}
          >
            <li onClick={this.closeNavigation} className="MainNav__link">
              <Link to="/" exact={true} content="home" funtional={true} />
            </li>
            <li onClick={this.closeNavigation} className="MainNav__link">
              <Link to="/shop" content="shop" funtional={true} />
            </li>
            <li onClick={this.closeNavigation} className="MainNav__link">
              <Link to="/about" content="about us" funtional={true} />
            </li>
            <li onClick={this.closeNavigation} className="MainNav__link">
              <Link to="/contact" content="contact us" funtional={true} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainNav;
