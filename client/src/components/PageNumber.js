import React, { Component } from "react";
import UrlParams from "utils/urlParams";
import history from "history.js";
import "styles/components/PageNumber.scss";

export class PageNumber extends Component {
  setPage(pageNumber) {
    const pageObject = { page: pageNumber };
    const currentParams = UrlParams.setParam(
      pageObject,
      window.location.search
    );
    const stringURL = UrlParams.buildURL(currentParams);
    history.push(`/shop?${stringURL}`);
    history.go();
  }

  render() {
    return (
      <button
        onClick={() => this.setPage(this.props.number)}
        className="PageNumber"
      >
        {this.props.number}
      </button>
    );
  }
}

export default PageNumber;
