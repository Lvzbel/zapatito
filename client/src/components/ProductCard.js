import React, { Component } from "react";
import { Link } from "react-router-dom";
import shoe from "img/product_test_img.jpg";
import "../styles/components/ButtonStyles.scss";
import "../styles/components/ProductCardStyles.scss";

export class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <figure className="ProductCard__figure">
          <div className="ProductCard__container">
            <img className="ProductCard__img" src={shoe} alt="shoe" />
            <div className="ProductCard__overlay">
              <Link to="#" className="ProductCard__cta btn btn__primary">
                Shop Now!
              </Link>
            </div>
          </div>
          <figcaption className="ProductCard__caption">
            <div className="ProductCard__details">
              <Link to="#" className="ProductCard__link">
                REBEL (ARMY GREEN)
              </Link>
              <p className="ProductCard__price">$115.00</p>
            </div>
            <div className="ProductCard__separator"></div>
            <p className="ProductCard__category">PERFORMANCE LIFESTYLE</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default ProductCard;
