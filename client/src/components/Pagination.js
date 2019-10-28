import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "actions/index";
import PageNumber from "components/PageNumber";
import Paginate from "utils/paginate";

export class Pagination extends Component {
  renderPageNumber = () => {
    const paginatedPageNumbers = new Paginate(
      this.props.currentPage,
      this.props.numberOfPages
    );
    const renderPageNumber = paginatedPageNumbers.getPages().map(page => {
      return (
        <PageNumber
          number={page}
          key={page}
          selected={parseInt(this.props.currentPage) === page}
          onClick={() => this.props.setPage(page)}
        />
      );
    });

    return renderPageNumber;
  };

  render() {
    return (
      <div className="Pagination">
        <PageNumber
          number="First"
          selected={parseInt(this.props.currentPage) === 1}
          onClick={() => this.props.setPage(1)}
        />
        {this.renderPageNumber()}
        <PageNumber
          number="Last"
          selected={
            parseInt(this.props.currentPage) === this.props.numberOfPages.length
          }
          onClick={() => this.props.setPage(this.props.numberOfPages.length)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPage: state.products.currentPage
  };
};

export default connect(
  mapStateToProps,
  { setPage }
)(Pagination);
