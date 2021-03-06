import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, updateCartQuantity } from "actions/index";
import Link from "components/Link";
import Modal from "components/Modal";
import CartItem from "components/CartItem";
import "styles/components/CartStyles.scss";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false
    };
  }

  renderItemList = () => {
    return this.props.cartItems.map(item => {
      return (
        <React.Fragment key={item.id}>
          <tr>
            <td className="Cart__product Cart__product--title">
              <CartItem
                image={item.image}
                name={item.name}
                size={item.sizeOption}
                category={item.category}
                remove={() => this.props.removeFromCart(item.id)}
              />
            </td>
            <td className="Cart__product Cart__product--quant">
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                min="1"
                max="5"
                className="Cart__quant-input"
                onChange={e => this.quantityChange(e, item.id)}
              />
            </td>
            <td className="Cart__product Cart__product--price">{`${item.price}0`}</td>
          </tr>
        </React.Fragment>
      );
    });
  };

  quantityChange(e, id) {
    this.props.updateCartQuantity(id, e.target.value);
  }

  renderEmptyMessage() {
    return (
      <tr>
        <td>
          <div className="Cart__empty">Wow! Is so lonely here.</div>
        </td>
      </tr>
    );
  }

  calculateTotal = () => {
    const itemsArray = this.props.cartItems;
    let counter = 0;

    if (itemsArray) {
      itemsArray.forEach(
        item => (counter += parseInt(item.price) * parseInt(item.quantity))
      );
    }

    return counter;
  };

  // MODAL

  renderCheckout = () => {
    return (
      <Modal onDismiss={this.closeCheckout}>
        Checkout proccess will go here.
      </Modal>
    );
  };

  openCheckout = () => {
    this.setState({
      checkout: true
    });
  };

  closeCheckout = () => {
    this.setState({
      checkout: false
    });
  };

  render() {
    const isCartEmpty = this.props.cartItems[0];
    return (
      <div className="Cart">
        <div className="Cart__container container">
          <h1 className="Cart__header">
            Shopping Cart <i className="Cart__icon fas fa-shopping-cart"></i>
          </h1>

          <div className="Cart__actions">
            <Link
              to="/shop"
              content="Continue Shopping"
              variant="primary"
              underline={true}
            />
            <button
              disabled={!isCartEmpty}
              onClick={this.openCheckout}
              className="Cart__btn btn btn__tertiary"
            >
              Checkout
            </button>
          </div>

          <table className="Cart__table">
            <thead>
              <tr>
                <th className="Cart__head Cart__head--title">Description</th>
                <th className="Cart__head Cart__head--quant">Quantity</th>
                <th className="Cart__head Cart__head--price">Price</th>
              </tr>
            </thead>
            <tbody>
              {isCartEmpty ? this.renderItemList() : this.renderEmptyMessage()}
            </tbody>
          </table>
          <div className="Cart__footer">
            <p className="Cart__total">{`Your Total is: $${this.calculateTotal()}.00`}</p>
            <button
              disabled={!isCartEmpty}
              onClick={this.openCheckout}
              className="Cart__btn btn btn__tertiary"
            >
              Checkout
            </button>
          </div>
        </div>
        {this.state.checkout && this.renderCheckout()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(
  mapStateToProps,
  { removeFromCart, updateCartQuantity }
)(Cart);
