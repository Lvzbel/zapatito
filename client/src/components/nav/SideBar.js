import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "actions";
import UrlParams from "utils/urlParams";
import "styles/components/nav/SideBarStyles.scss";

export class SideBar extends Component {
  setPriceRange = (e, min, max) => {
    const priceObject = { price_min: min, price_max: max };
    const currentParams = UrlParams.setParam(
      priceObject,
      window.location.search
    );
    this.props.setPage(1);
    const stringURL = UrlParams.buildURL(currentParams);
    this.props.redirect(`/shop?${stringURL}`);
  };

  setFilter = (e, filterType, value) => {
    const filterObject = { [filterType]: value };
    const currentParams = UrlParams.setParam(
      filterObject,
      window.location.search
    );
    this.props.setPage(1);
    const stringURL = UrlParams.buildURL(currentParams);
    this.props.redirect(`/shop?${stringURL}`);
  };

  resetPriceRange = () => {
    const currentParams = UrlParams.getParams(window.location.search);
    delete currentParams.price_max;
    delete currentParams.price_min;
    this.props.setPage(1);
    const stringURL = UrlParams.buildURL(currentParams);
    this.props.redirect(`/shop?${stringURL}`);
  };

  resetFilter = (e, filterType) => {
    const currentParams = UrlParams.getParams(window.location.search);
    delete currentParams[filterType];
    const stringURL = UrlParams.buildURL(currentParams);
    this.props.setPage(1);
    this.props.redirect(`/shop?${stringURL}`);
  };

  resetAll = () => {
    this.props.setPage(1);
    this.props.redirect("/shop");
  };

  render() {
    return (
      <div className="SideBar">
        <h4 className="SideBar__title">FILTER RESULTS</h4>

        <div className="SideBar__options">
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
                <button
                  className="SideBar__link"
                  onClick={e => this.setPriceRange(e, 51, 100)}
                >
                  <i className="fas fa-angle-right"></i>
                  $51.00 - $100.00
                </button>
              </li>
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setPriceRange(e, 101, 150)}
                >
                  <i className="fas fa-angle-right"></i>
                  $101.00 - $150.00
                </button>
              </li>
              <li className="SideBar__nav-item">
                <i className="fas fa-minus"></i>
                <button
                  className="SideBar__link"
                  onClick={this.resetPriceRange}
                >
                  Reset Price Range
                </button>
              </li>
            </ul>
          </div>

          <div className="SideBar__block">
            <h5 className="SideBar__block--heading">SHOP BY CATEGORY</h5>
            <ul className="SideBar__nav-list">
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "category", "shoes")}
                >
                  <i className="fas fa-angle-right"></i>
                  SHOES
                </button>
              </li>
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "category", "backpack")}
                >
                  <i className="fas fa-angle-right"></i>
                  BACKPACKS
                </button>
              </li>
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "category", "shirts")}
                >
                  <i className="fas fa-angle-right"></i>
                  SHIRTS
                </button>
              </li>
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "category", "pants")}
                >
                  <i className="fas fa-angle-right"></i>
                  PANTS
                </button>
              </li>
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "category", "shorts")}
                >
                  <i className="fas fa-angle-right"></i>
                  SHORTS
                </button>
              </li>
              <li className="SideBar__nav-item">
                <i className="fas fa-minus"></i>
                <button
                  className="SideBar__link"
                  onClick={e => this.resetFilter(e, "category")}
                >
                  Reset Category
                </button>
              </li>
            </ul>
          </div>

          <div className="SideBar__block">
            <h5 className="SideBar__block--heading">SORT BY PRICE</h5>
            <ul className="SideBar__nav-list">
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "order", "desc")}
                >
                  <i className="fas fa-angle-right"></i>
                  Lower Price First
                </button>
              </li>
              <li className="SideBar__nav-item">
                <button
                  className="SideBar__link"
                  onClick={e => this.setFilter(e, "order", "inc")}
                >
                  <i className="fas fa-angle-right"></i>
                  Highest Price First
                </button>
              </li>
              <li className="SideBar__nav-item">
                <i className="fas fa-minus"></i>
                <button
                  className="SideBar__link"
                  onClick={e => this.resetFilter(e, "order")}
                >
                  Reset Price Filter
                </button>
              </li>
            </ul>
          </div>
          <div className="SideBar__block SideBar__reset">
            <ul className="SideBar__nav-list">
              <li className="SideBar__nav-item">
                <i className="fas fa-trash-alt"></i>
                <button className="SideBar__link" onClick={this.resetAll}>
                  Reset All
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// export default SideBar;
export default connect(null, { setPage })(SideBar);
