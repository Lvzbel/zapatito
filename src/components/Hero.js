import React, { Component } from "react";
import "../styles/components/HeroStyles.scss";

export class Hero extends Component {
  render() {
    return (
      <header className="Hero">
        <div className="Hero__container container">
          <h1 className="Hero__header">High Quality Footware</h1>
        </div>
      </header>
    );
  }
}

export default Hero;
