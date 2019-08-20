// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <App />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>,
  document.getElementById("root")
);
