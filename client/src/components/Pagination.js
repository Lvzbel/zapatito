import React, { Component } from "react";
import PageNumber from "components/PageNumber";

export class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <PageNumber number={1} />
        <PageNumber number={2} />
        <PageNumber number={3} />
        <PageNumber number={4} />
        <PageNumber number={5} />
      </div>
    );
  }
}

export default Pagination;
