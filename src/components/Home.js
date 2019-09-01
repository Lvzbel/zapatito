import React, { Component } from "react";
import Hero from "./Hero";
import PromoImg from "./PromoImg";
import "../styles/components/HomeStyles.scss";
import "../styles/components/ButtonStyles.scss";
import "../styles/layout/HomeStyles.scss";

// TEST
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

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
          <div className="Home__stiches">
            <div className="Home__stich"></div>
            <div className="Home__stich"></div>
            <div className="Home__stich"></div>
            <div className="Home__stich"></div>
            <div className="Home__stich"></div>
          </div>
        </section>
        <section className="Home__featured">
          <h3 className="Home__header">FEATURED PRODUCTS</h3>
          <div className="container">
            <Carousel>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Carousel>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
