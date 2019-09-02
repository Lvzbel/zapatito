import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/components/HeroStyles.scss";

export class Hero extends Component {
  render() {
    return (
      <header className="Hero">
        <div className="Hero__container container">
          <h1 className="Hero__header">High Quality Footware</h1>
          <Link className="Hero__cta btn btn__primary" to="/">
            Shop Now!
          </Link>
        </div>
      </header>
    );
  }
}

export default Hero;
