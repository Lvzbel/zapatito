import React from "react";
import Link from "../Link";
import "../../styles/components/nav/LoginNavStyles.scss";

function LoginNav() {
  return (
    <div className="LoginNav">
      <div className="LoginNav__container container">
        <p className="LoginNav__promo">Free shipping on orders over $49</p>
        <ul className="LoginNav__nav">
          <li>
            <Link
              to="/login"
              content="Login"
              variant="light"
              funtional={false}
              icon="fas fa-sign-in-alt"
            />
          </li>
          <li>
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

export default LoginNav;
