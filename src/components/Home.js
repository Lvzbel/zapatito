import React, { Component } from "react";
import Hero from "./Hero";
import PromoImg from "./PromoImg";
import "../styles/components/HomeStyles.scss";
import "../styles/components/ButtonStyles.scss";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <div style={{ height: "600px", display: "flex", width: "100%" }}>
          <PromoImg />
          <PromoImg />
        </div>
      </div>
    );
  }
}

export default Home;
