import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAll } from "actions";
import ProductCard from "components/ProductCard";
import "styles/components/ShopStyles.scss";

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  renderItems() {
    return this.props.productsAll.slice(1, 22).map(item => (
      <div className="Shop__item">
        <ProductCard
          key={item.id}
          id={item.id}
          image={`/images/${item.image}.jpg`}
          price={item.price}
          category={item.category}
        />
      </div>
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div className="Shop">
        <div className="Shop__banner"></div>
        <div className="Shop__content container">
          <aside className="Shop__filter">Filter</aside>
          <div className="Shop__items">
            {this.props.productsAll && this.renderItems()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsAll: state.products.productsAll,
    productsFiltered: []
  };
};

export default connect(
  mapStateToProps,
  { fetchAll }
)(Shop);
