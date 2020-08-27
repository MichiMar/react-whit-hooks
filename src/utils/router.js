import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Blog from "../components/pages/Blog";
import About from "../components/pages/About";

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="about" path="/about" component={About} />,
  <Route exact key="blog" path="/blog" component={Blog} />,
];
