import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/FooterStyles.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__container container">
        <div className="Footer__section">
          <h5 className="Footer__header">Nav</h5>
          <ul className="Footer__links">
            <li className="Footer__link">
              <Link to="/">home</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">blog</Link>
            </li>
            <li className="Footer__link">
              <Link to="/cart">cart</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">account</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">size chart</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">teams</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">catalog</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">events</Link>
            </li>
          </ul>
        </div>
        <div className="Footer__section">
          <h5 className="Footer__header">Shop</h5>
          <ul className="Footer__links">
            <li className="Footer__link">
              <Link to="/">footwear</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">accessories</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">apparel</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">closeout</Link>
            </li>
            <li className="Footer__link">
              <Link to="#">sale</Link>
            </li>
          </ul>
        </div>
        <div className="Footer__section">
          <ul className="Footer__social">
            <li>
              <Link to="#">
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="fab fa-twitter"></i>
              </Link>
            </li>
          </ul>
          <h5 className="Footer__header">Connect</h5>
          <div className="Footer__info">
            <i class="fas fa-map-marker-alt"></i>
            <address>1234 Flor st Los Angeles, CA 00000</address>
          </div>
          <div className="Footer__info">
            <i class="fas fa-phone-square-alt"></i>
            <p>800-000-000</p>
          </div>
          <div className="Footer__info">
            <i class="fas fa-envelope-open-text"></i>
            <p>info@zapatito.com</p>
          </div>
          <div className="Footer__info">
            <i class="far fa-clock"></i>
            <p>
              mon-fri | 9:30am-4:30pm<span>sat-sun | closed</span>
            </p>
          </div>
        </div>
      </div>
      <div className="Footer__trademark">
        <div className="container">
          <p>Created by Rodrigo Coto 2019</p>
          <div className="Footer__terms">
            <Link>TERMS OF SERVICE</Link> <span>|</span>
            <Link>PRIVACY POLICY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
