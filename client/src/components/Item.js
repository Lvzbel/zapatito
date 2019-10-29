import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItem } from "../actions/index";
import "styles/components/ItemStyles.scss";
import SizePicker from "components/formInputs/SizePicker";
import QuatityInput from "components/formInputs/QuatityInput";

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeOption: null,
      quantity: 1
    };
  }

  componentDidMount() {
    const item = this.props.match.params.id;
    this.props.fetchItem(item);
  }

  setSizeOption = value => {
    this.setState({ sizeOption: value });
  };

  render() {
    const item = this.props.productsItem[this.props.productsItem.length - 1];
    if (item) {
      return (
        <div className="Item">
          <div className="container">
            <div className="Item__content">
              <div className="Item__card">
                <img
                  className="Item__image"
                  src={`/images/${item.image}.jpg`}
                  alt={item.name}
                />
              </div>

              <div className="Item__description">
                <div className="Item__header">
                  <h5 className="Item__name">{item.name}</h5>
                  <p className="Item__price">{`$${item.price}0`}</p>
                </div>
                <hr />
                <p className="Item__category">{item.category}</p>

                <form className="Item_form">
                  {item.category !== "backpack" && (
                    <SizePicker
                      action={this.setSizeOption}
                      category={item.category}
                    />
                  )}
                  <QuatityInput />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Item">
        <h2>Loading</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { productsItem: state.products.productsRecent };
};

export default connect(
  mapStateToProps,
  { fetchItem }
)(Item);
