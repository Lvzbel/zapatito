import React, { Component } from "react";
import Link from "components/Link";
import "styles/components/CartStyles.scss";

export class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <div className="Cart__container container">
          <h1 className="Cart__header">
            Shopping Cart <i className="fas fa-shopping-cart"></i>
          </h1>

          <div className="Cart__actions">
            <Link
              to="/shop"
              content="Continue Shopping"
              variant="primary"
              underline={true}
            />
            <button className="Cart__btn btn btn__tertiary">Checkout</button>
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
              <tr>
                <td className="Cart__product Cart__product--title">Backpack</td>
                <td className="Cart__product Cart__product--quant">1</td>
                <td className="Cart__product Cart__product--price">$299</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
