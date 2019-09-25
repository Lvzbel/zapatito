import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAll } from "actions";
import "styles/components/ShopStyles.scss";

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    console.log(this.props);
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
