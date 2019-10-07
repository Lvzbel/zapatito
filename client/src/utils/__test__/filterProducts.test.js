import FilterProducts from "utils/filterProducts";

describe("Checks if input is being filtered properly", () => {
  it("checks if the instance is initialize correctly", () => {
    const testClass = new FilterProducts([]);
    expect(testClass).toBeInstanceOf(FilterProducts);
  });

  it("checks if is filtered by price correctly", () => {
    const db = [
      { price: "75" },
      { price: "60" },
      { price: "77" },
      { price: "80" },
      { price: "81" }
    ];

    const testPriceRange = new FilterProducts(db);
    testPriceRange.byPrice([75, 80]);
    expect(testPriceRange.getItems().length).toEqual(3);
  });
});
