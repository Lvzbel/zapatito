import React, { Component } from "react";
import "styles/components/PageNumber.scss";

export class PageNumber extends Component {
  render() {
    return <button className="PageNumber">{this.props.number}</button>;
  }
}

export default PageNumber;
