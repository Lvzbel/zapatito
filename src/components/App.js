import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Shop from "./Shop";
import Sale from "./Sale";
import About from "./About";
import Contact from "./Contact";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" strict component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sale" component={Sale} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
