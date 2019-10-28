import React, { Component } from "react";
import "styles/components/PageNumber.scss";

export class PageNumber extends Component {
  render() {
    const selected = this.props.selected ? " selected" : "";

    return (
      <button onClick={this.props.onClick} className={`PageNumber${selected}`}>
        <div className="PageNumber__number">{this.props.number}</div>
      </button>
    );
  }
}

export default PageNumber;
