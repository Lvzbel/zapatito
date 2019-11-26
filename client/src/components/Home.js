import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";
import { fetchSale } from "actions";
import Hero from "./Hero";
import PromoImg from "./PromoImg";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";
import "../styles/components/HomeStyles.scss";
import "../styles/components/ButtonStyles.scss";
import "../styles/layout/HomeStyles.scss";

export class Home extends Component {
  componentWillMount() {
    AOS.init();
  }

  componentDidMount() {
    this.props.fetchSale();
  }

  renderCarouselItems() {
    return this.props.productsSale.map(item => (
      <ProductCard
        key={item.id}
        id={item.id}
        name={item.name}
        image={`/images/${item.image}.jpg`}
        price={item.price}
        category={item.category}
      />
    ));
  }
  render() {
    return (
      <div data-aos-duration="1000" data-aos="fade-down" className="Home">
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
          <div className="Home__container container">
            <Carousel className="Home-carousel">
              {this.renderCarouselItems()}
            </Carousel>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { productsSale: state.products.productsSale };
};

export default connect(mapStateToProps, { fetchSale })(Home);
