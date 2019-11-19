import React from "react";
import { connect } from "react-redux";
import Link from "../Link";
import "../../styles/components/nav/LoginNavStyles.scss";
import GoogleAuth from "../GoogleAuth";

function LoginNav(props) {
  const cartQuatity = props.cartItems.length;

  const quantityComponent = (
    <div className="LoginNav__quantity">{cartQuatity}</div>
  );

  console.log(props.cartItems);
  return (
    <div className="LoginNav">
      <div className="LoginNav__container container">
        <p className="LoginNav__promo">Free shipping on orders over $49</p>
        <ul className="LoginNav__nav">
          <li>
            <GoogleAuth />
          </li>
          <li className="LoginNav__cart-link">
            {cartQuatity ? quantityComponent : null}
            <Link
              to="/cart"
              content="Cart"
              variant="light"
              funtional={false}
              icon="fas fa-shopping-cart"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, null)(LoginNav);
