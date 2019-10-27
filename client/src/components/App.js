import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Shop from "./Shop";
import Item from "./Item";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import NotFound from "./NotFound";
import ContactRedirect from "./ContactRedirect";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route exact path="/shop/item/:id" component={Item} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/form-redirect/:customer"
              component={ContactRedirect}
            />
            <Route exact path="/" strict component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
