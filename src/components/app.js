import React, { Component } from "react";

export default class App extends Component {
  render() {
    const dynamicBackgroundColor = "blue";

    const styles = {
      height: "100px",
      backgroundColor: dynamicBackgroundColor,
      color: "white",
    };

    return (
      <div className="app">
        <h1>DevCamp React Starter</h1>
        <h2>React + React Router</h2>

        <div style={styles}>Testing Style</div>
      </div>
    );
  }
}
