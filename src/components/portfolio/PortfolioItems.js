import React from "react";

const PortfolioItemsList = () => {
  const items = [
    { id: 1, title: "Quip" },
    { id: 2, title: "Eventbrite" },
    { id: 3, title: "Devcamp" },
  ];

  const itemsRenderer = () => {
    return items.map((item) => <div key={item.id}>{item.title}</div>);
  };

  return <div>{itemsRenderer()}</div>;
};

export default () => {
  return <PortfolioItemsList />;
};
