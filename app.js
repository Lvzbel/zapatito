const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/products.json");

const saleFinder = db => {
  const sortedProducts = db.sort((a, b) => {
    if (parseFloat(a.price) < parseFloat(b.price)) {
      return -1;
    }
    if (parseFloat(a.price) > parseFloat(b.price)) {
      return 1;
    }
    return 0;
  });
  return sortedProducts.splice(0, 9);
};

// STATIC FILES
app.use(express.static(path.join(__dirname, "client/build")));

// STATIC IMAGES
app.use("/images", express.static(path.join(__dirname, "img")));

// ROUTES
app.get("/api", (req, res) => {
  res.json(db);
});

app.get("/api/shoes", (req, res) => {
  const shoes = db.products.filter(product => product.category === "shoes");
  res.json(shoes);
});

app.get("/api/backpacks", (req, res) => {
  const backpack = db.products.filter(
    product => product.category === "backpack"
  );
  res.json(backpack);
});

app.get("/api/shirts", (req, res) => {
  const shirts = db.products.filter(product => product.category === "shirts");
  res.json(shirts);
});

app.get("/api/pants", (req, res) => {
  const pants = db.products.filter(product => product.category === "pants");
  res.json(pants);
});

app.get("/api/sale", (req, res) => {
  const saleProducts = saleFinder(db.products);
  res.json(saleProducts);
});

const saleProducts = saleFinder(db.products);
// Server running
app.listen(5000);
