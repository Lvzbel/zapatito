import FilterProducts from "utils/filterProducts";

describe("Checks if input is being filtered properly", () => {
  it("checks if the instance is initialize correctly", () => {
    const testClass = new FilterProducts([]);
    expect(testClass).toBeInstanceOf(FilterProducts);
  });

  it("checks if is filtered by price", () => {
    const db = [
      { price: "75" },
      { price: "60" },
      { price: "77" },
      { price: "80" },
      { price: "81" }
    ];

    const testPriceRange = new FilterProducts(db);
    testPriceRange.byPrice([75, 80]);
    expect(testPriceRange.getProducts().length).toEqual(3);
  });

  it("checks if is filtered by category", () => {
    const db = [
      { category: "shoes" },
      { category: "shoes" },
      { category: "backpacks" },
      { category: "pants" }
    ];

    const testCategory = new FilterProducts(db);
    testCategory.byCategory("shoes");
    expect(testCategory.getProducts().length).toEqual(2);
  });

  it("checks if is filtered by price and category", () => {
    const db = [
      { price: "75", category: "shoes" },
      { price: "60", category: "shoes" },
      { price: "77", category: "shoes" },
      { price: "80", category: "backpacks" },
      { price: "81", category: "pants" }
    ];

    const testCategoryPrice = new FilterProducts(db);
    testCategoryPrice.byPrice([75, 80]);
    testCategoryPrice.byCategory("shoes");
    expect(testCategoryPrice.getProducts().length).toEqual(2);
  });
});
