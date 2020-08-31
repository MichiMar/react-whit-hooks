import React from "react";
import NavBar from "../shared/NavBar";
import DashboardLaoyout from "../layouts/DashboardLaoyout";
import PortfolioItems from "../portfolio/PortfolioItems";

export default () => {
  const dynamicBackgroundColor = "black";

  const styles = {
    height: "100px",
    backgroundColor: dynamicBackgroundColor,
    color: "white",
  };

  return (
    <DashboardLaoyout>
      <PortfolioItems />
    </DashboardLaoyout>
  );
};
