// import { desc, inc } from "./sortPrice";

const desc = (a, b) => {
  // a is less than b by some ordering criterion
  if (a < b) {
    return -1;
  }
  // a is greater than b by the ordering criterion
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
};

const inc = (a, b) => {
  // a is greater than b by some ordering criterion
  if (a > b) {
    return -1;
  }
  // a is less than b by the ordering criterion
  if (a < b) {
    return 1;
  }
  // a must be equal to b
  return 0;
};

class FilterProducts {
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

  sortBy(order = "desc") {
    let sortedResult;

    if (order === "desc") {
      sortedResult = this.products.sort((a, b) => {
        return desc(a.price, b.price);
      });
    }
    if (order === "inc") {
      sortedResult = this.products.sort((a, b) => {
        return inc(a.price, b.price);
      });
    }

    this.setProducts(sortedResult);
  }
}

const db = require("../../../db/products.json");

const test = new FilterProducts(db.products);
test.byCategory("shoes");
test.byPrice([50, 99]);
test.sortBy("inc");
console.log(test.getProducts());
