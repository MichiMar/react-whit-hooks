import React from "react";
import NavBar from "../shared/NavBar";

export default () => {
  const dynamicBackgroundColor = "black";

  const styles = {
    height: "100px",
    backgroundColor: dynamicBackgroundColor,
    color: "white",
  };

  return (
    <div className="app">
      <NavBar />
      <h1>DevCamp React Starter</h1>
      <h2>React + React Router</h2>

      <div style={styles}>Testing Style</div>
      <NavBar />
    </div>
  );
};
