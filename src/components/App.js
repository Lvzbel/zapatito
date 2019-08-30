import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Shop from "./Shop";
import Sale from "./Sale";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <main>
            <Route path="/shop" component={Shop} />
            <Route path="/sale" component={Sale} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" strict component={Home} />
          </main>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
