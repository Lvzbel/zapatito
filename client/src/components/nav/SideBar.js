import React, { Component } from "react";
import "styles/components/nav/SideBarStyles.scss";

export class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <h4 className="SideBar__title">FILTER RESULTS</h4>

        <div className="SideBar__block">
          <h5 className="SideBar__block--heading">SHOP BY PRICE</h5>
          <ul className="SideBar__nav-list">
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                $0.00 - $50.00
              </a>
            </li>
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                $61.00 - $100.00
              </a>
            </li>
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                $101.00 - $150.00
              </a>
            </li>
          </ul>
        </div>

        <div className="SideBar__block">
          <h5 className="SideBar__block--heading">SHOP BY CATEGORY</h5>
          <ul className="SideBar__nav-list">
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                SHOES
              </a>
            </li>
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                BACKPACKS
              </a>
            </li>
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                SHIRTS
              </a>
            </li>
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                PANTS
              </a>
            </li>
            <li className="SideBar__nav-item">
              <a className="SideBar__link" href="#">
                <i className="fas fa-angle-right"></i>
                SHORTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
