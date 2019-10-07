export default class FilterProducts {
  constructor(products) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  setProducts(filteredItems) {
    this.products = filteredItems;
  }

  byPrice([low, high]) {
    const filteredByPrice = this.products.filter(product => {
      const productPrice = parseFloat(product.price);
      return productPrice >= low && productPrice <= high;
    });

    this.setProducts(filteredByPrice);
  }

  byCategory(category) {
    const filteredByCategory = this.products.filter(product => {
      return category === product.category;
    });

    this.setProducts(filteredByCategory);
  }
}
