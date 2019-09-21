import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItem } from "../actions/index";
import "styles/components/ItemStyles.scss";

export class Item extends Component {
  componentDidMount() {
    const item = this.props.match.params.id;
    this.props.fetchItem(item);
  }

  render() {
    const item = this.props.productsItem[this.props.productsItem.length - 1];
    console.log(item);
    return <div className="Item"></div>;
  }
}

const mapStateToProps = state => {
  return { productsItem: state.products.productsRecent };
};

export default connect(
  mapStateToProps,
  { fetchItem }
)(Item);
