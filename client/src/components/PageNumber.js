import React, { Component } from "react";
import "styles/components/PageNumber.scss";

export class PageNumber extends Component {
  render() {
    const selected = this.props.selected ? " selected" : "";

    return (
      <button
        onClick={() => this.setPage(this.props.number)}
        className={`PageNumber${selected}`}
      >
        {this.props.number}
      </button>
    );
  }
}

export default PageNumber;
