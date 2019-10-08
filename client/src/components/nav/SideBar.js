import React, { Component } from "react";
import UrlParams from "utils/urlParams";
import "styles/components/nav/SideBarStyles.scss";

export class SideBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setPriceRange = this.setPriceRange.bind(this);
  // }
  setPriceRange = (e, min, max) => {
    const priceObject = { price_min: min, price_max: max };
    const currentParams = UrlParams.setParam(
      priceObject,
      window.location.search
    );
    const stringURL = UrlParams.buildURL(currentParams);
    this.props.redirect(`/shop/?${stringURL}`);
  };

  render() {
    return (
      <div className="SideBar">
        <h4 className="SideBar__title">FILTER RESULTS</h4>

        <div className="SideBar__block">
          <h5 className="SideBar__block--heading">SHOP BY PRICE</h5>
          <ul className="SideBar__nav-list">
            <li className="SideBar__nav-item">
              <button
                className="SideBar__link"
                onClick={e => this.setPriceRange(e, 0, 50)}
              >
                <i className="fas fa-angle-right"></i>
                $0.00 - $50.00
              </button>
            </li>
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                $51.00 - $100.00
              </button>
            </li>
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                $101.00 - $150.00
              </button>
            </li>
          </ul>
        </div>

        <div className="SideBar__block">
          <h5 className="SideBar__block--heading">SHOP BY CATEGORY</h5>
          <ul className="SideBar__nav-list">
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                SHOES
              </button>
            </li>
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                BACKPACKS
              </button>
            </li>
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                SHIRTS
              </button>
            </li>
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                PANTS
              </button>
            </li>
            <li className="SideBar__nav-item">
              <button className="SideBar__link">
                <i className="fas fa-angle-right"></i>
                SHORTS
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
