import React, { Component } from "react";
import "styles/components/formInputs/QuantityInput.scss";

export class QuatityInput extends Component {
  increaseQuantity = () => {
    if (this.props.quantity < 5) {
      this.props.action(this.props.quantity + 1);
    }
  };

  decreaseQuantity = () => {
    if (this.props.quantity > 1) {
      this.props.action(this.props.quantity - 1);
    }
  };

  render() {
    return (
      <div className="QuantityInput">
        <p className="QuantityInput__label">Select Quantity</p>
        <div className="QuantityInput__container">
          <button
            onClick={this.decreaseQuantity}
            className="QuantityInput__button"
          >
            <i className="fas fa-minus"></i>
          </button>
          <div className="QuantityInput__display">
            <p>{this.props.quantity}</p>
          </div>
          <button
            onClick={this.increaseQuantity}
            className="QuantityInput__button"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default QuatityInput;
