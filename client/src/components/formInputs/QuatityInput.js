import React, { Component } from "react";

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
        <button
          onClick={this.decreaseQuantity}
          className="QuantityInput__button"
        >
          -
        </button>
        <div className="QuantityInput__display">{this.props.quantity}</div>
        <button
          onClick={this.increaseQuantity}
          className="QuantityInput__button"
        >
          +
        </button>
      </div>
    );
  }
}

export default QuatityInput;
