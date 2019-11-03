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
      error: null,
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

  setQuantity = value => {
    this.setState({ quantity: value });
  };

  onSubmit = () => {
    const currentItem = this.props.productsItem[
      this.props.productsItem.length - 1
    ];
    const { sizeOption, quantity } = this.state;
    // Item must have size selected unless is a backpack
    if (this.state.sizeOption || currentItem.category === "backpack") {
      console.log({
        ...currentItem,
        sizeOption,
        quantity
      });
    } else {
      console.log("Please pick a size");
    }
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

                <div className="Item__inputs">
                  {item.category !== "backpack" && (
                    <div className="Item__input">
                      <SizePicker
                        action={this.setSizeOption}
                        category={item.category}
                      />
                    </div>
                  )}
                  <div className="Item__input">
                    <QuatityInput
                      action={this.setQuantity}
                      quantity={this.state.quantity}
                    />
                  </div>
                  <div className="Item__btn">
                    <button
                      onClick={this.onSubmit}
                      className="btn btn__tertiary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
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
