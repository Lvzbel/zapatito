import React, { Component } from "react";
import Hero from "./Hero";
import PromoImg from "./PromoImg";
import "../styles/components/HomeStyles.scss";
import "../styles/components/ButtonStyles.scss";
import "../styles/layout/HomeStyles.scss";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <section className="Home__promo-images">
          <div className="Home__promo-image">
            <PromoImg />
          </div>
          <div className="Home__promo-image">
            <PromoImg />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
