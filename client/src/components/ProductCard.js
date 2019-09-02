import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/ButtonStyles.scss";
import "../styles/components/ProductCardStyles.scss";

function ProductCard({ name, image, price, category }) {
  return (
    <div className="ProductCard">
      <figure className="ProductCard__figure">
        <div className="ProductCard__container">
          <img className="ProductCard__img" src={image} alt="shoe" />
          <div className="ProductCard__overlay">
            <Link to="#" className="ProductCard__cta btn btn__primary">
              Shop Now!
            </Link>
          </div>
        </div>
        <figcaption className="ProductCard__caption">
          <div className="ProductCard__details">
            <Link to="#" className="ProductCard__link">
              {name}
            </Link>
            <p className="ProductCard__price">{`$${price}0`}</p>
          </div>
          <div className="ProductCard__separator"></div>
          <p className="ProductCard__category">{category}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export default ProductCard;
