import React, { Component } from "react";
import "styles/components/ShopStyles.scss";

export class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <div className="Shop__banner"></div>
        <div className="Shop__content container">
          <aside className="Shop__filter">Filter</aside>
          <div className="Shop__items">Shop</div>
        </div>
      </div>
    );
  }
}

export default Shop;
