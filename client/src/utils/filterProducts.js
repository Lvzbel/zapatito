export default class FilterProducts {
  constructor(products) {
    this.products = products;
    this.filteredProducts = [];
  }

  byPrice([low, high]) {
    const filteredByPrice = this.products.filter(product => {
      const productPrice = parseFloat(product.price);
      return productPrice >= low && productPrice <= high;
    });

    this.filteredProducts = filteredByPrice;
  }

  getItems() {
    return this.filteredProducts;
  }
}
