import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAll } from "actions";
import UrlParams from "utils/urlParams";
import ProductCard from "components/ProductCard";
import SideBar from "components/nav/SideBar";
import "styles/components/ShopStyles.scss";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPage: 1,
      postsPerPage: 20
    };
  }

  componentDidMount() {
    this.props.fetchAll(this.props.location.search);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      const params = UrlParams.getParams(this.props.location.search);
      this.props.fetchAll(params);
      this.pagination();
    }
    return;
  }

  renderItems() {
    return this.props.productsAll.slice(1, 22).map(item => (
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
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const showingPosts = this.props.productsAll.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    this.setState((state, props) => ({
      posts: showingPosts
    }));
  }

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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsAll: state.products.productsAll,
    productsFiltered: []
  };
};

export default connect(
  mapStateToProps,
  { fetchAll }
)(Shop);
