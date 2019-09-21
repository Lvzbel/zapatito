import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Shop from "./Shop";
import Item from "./Item";
import Sale from "./Sale";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path="/shop/item/:id" component={Item} />
            <Route path="/shop" component={Shop} />
            <Route path="/sale" component={Sale} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" strict component={Home} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
