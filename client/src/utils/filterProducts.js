export default class FilterProducts {
  constructor(products) {
    this.products = products;
    this.filteredProducts = [];
  }

  getItems() {
    return this.filteredProducts;
  }

  setItems(filteredItems) {
    this.filteredProducts = filteredItems;
  }

  byPrice([low, high]) {
    const filteredByPrice = this.products.filter(product => {
      const productPrice = parseFloat(product.price);
      return productPrice >= low && productPrice <= high;
    });

    this.setItems(filteredByPrice);
  }

  byCategory(category) {
    const filteredByCategory = this.products.filter(product => {
      return category === product.category;
    });

    this.setItems(filteredByCategory);
  }
}
