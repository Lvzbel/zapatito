import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAll } from "actions";
import ProductCard from "components/ProductCard";
import SideBar from "components/nav/SideBar";
import "styles/components/ShopStyles.scss";

export class Shop extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  renderItems() {
    return this.props.productsAll.slice(1, 22).map(item => (
      <div className="Shop__item" key={item.id}>
        <ProductCard
          id={item.id}
          name={item.name}
          image={`/images/${item.image}.jpg`}
          price={item.price}
          category={item.category}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="Shop">
        <div className="Shop__banner"></div>
        <div className="Shop__content container">
          <aside className="Shop__filter">
            <SideBar redirect={this.props.history.push} />
          </aside>
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
