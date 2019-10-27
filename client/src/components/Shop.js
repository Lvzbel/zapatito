import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAll, resetLoad, setPage } from "actions";
import UrlParams from "utils/urlParams";
import ProductCard from "components/ProductCard";
import SideBar from "components/nav/SideBar";
import Pagination from "components/Pagination";
import "styles/components/ShopStyles.scss";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsPerPage: 15
    };
  }

  componentDidMount() {
    const params = UrlParams.getParams(this.props.location.search);
    this.props.fetchAll(params);
    this.setPageNumber(params);
  }

  componentWillUnmount() {
    this.props.resetLoad();
  }

  componentDidUpdate(prevProps, prevState) {
    // Checks if async fetch has been completed before pagination is apply
    if (prevProps.shopLoading !== this.props.shopLoading) {
      this.pagination();
      this.props.resetLoad();
    }
    if (prevProps.location.search !== this.props.location.search) {
      const params = UrlParams.getParams(this.props.location.search);
      this.props.fetchAll(params);
    }
    // Check if page number has changed
    if (prevProps.currentPage !== this.props.currentPage) {
      this.pagination();
      this.setPageParam();
    }
    return;
  }

  renderItems() {
    return this.state.posts.map(item => (
      <div className="Shop__item" key={item.id}>
        <ProductCard
          id={item.id}
          name={item.name}
          image={`/images/${item.image}.jpg`}
          price={item.price}
          category={item.category}
        />
      </div>
    ));
  }

  pagination() {
    const indexOfLastPost = this.props.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const showingPosts = this.props.productsAll.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    this.setState((state, props) => ({
      posts: showingPosts
    }));
  }

  setPageNumber(params) {
    if (params.page) {
      this.props.setPage(parseInt(params.page));
    }
  }

  numberOfPages() {
    if (this.props.productsAll) {
      const totalPages = parseInt(
        this.props.productsAll.length / this.state.postsPerPage
      );
      const pages = [];
      for (let i = 1; i < totalPages; i++) {
        pages.push(i);
      }
      return pages;
    } else {
      return [1];
    }
  }

  setPageParam = () => {
    const pageObject = { page: this.props.currentPage };
    const currentParams = UrlParams.setParam(
      pageObject,
      window.location.search
    );
    const stringURL = UrlParams.buildURL(currentParams);
    this.props.history.push(`/shop?${stringURL}`);
  };

  render() {
    return (
      <div className="Shop">
        <div className="Shop__banner"></div>
        <div className="Shop__content container">
          <aside className="Shop__filter">
            <SideBar redirect={this.props.history.push} />
          </aside>
          <div className="Shop__items">
            {this.props.productsAll && this.renderItems()}
            <div className="Shop__pagination">
              <Pagination numberOfPages={this.numberOfPages()} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsAll: state.products.productsAll,
    shopLoading: state.products.shopLoading,
    currentPage: state.products.currentPage
  };
};

export default connect(
  mapStateToProps,
  { fetchAll, resetLoad, setPage }
)(Shop);
