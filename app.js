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
  const filtered = sortedProducts.filter(
    item => item.category === "shoes" || item.category === "backpack"
  );
  return filtered.splice(0, 14);
};

// STATIC FILES
app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "client/public/index.html"), function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

// STATIC IMAGES
app.use("/images", express.static(path.join(__dirname, "img")));

// ROUTES
app.get("/api", (req, res) => {
  res.json(db);
});

app.get("/api/item/:id", (req, res) => {
  const itemId = req.params.id;
  const item = db.products.filter(product => product.id.toString() === itemId);
  res.json(item);
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

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const saleProducts = saleFinder(db.products);
// Server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
