import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/nav/LoginNavStyles.scss";

function LoginNav() {
  return (
    <div className="LoginNav">
      <div className="LoginNav__container container">
        <p className="LoginNav__promo">Free shipping on orders over $49</p>
        <ul className="LoginNav__nav">
          <li>
            <Link className="LoginNav__link" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="LoginNav__link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginNav;
