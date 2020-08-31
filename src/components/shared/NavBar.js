import React from "react";
import { Link } from "react-router-dom";

// @ts-ignore
const logo = require("../../../static/assets/images/binary.png");

export default () => {
  return (
    <div>
      <img src={logo} />
      <div>Michelle Marquez</div>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};
