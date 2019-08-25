import React, { Component } from "react";
import Hero from "./Hero";
import "../styles/components/HomeStyles.scss";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
      </div>
    );
  }
}

export default Home;
