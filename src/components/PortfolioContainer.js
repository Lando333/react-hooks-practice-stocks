import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, sellStock }) {

  const portfolioElements = portfolio.map(stock =>
    <Stock
      key={stock.id}
      id={stock.id}
      ticker={stock.ticker}
      name={stock.name}
      type={stock.type}
      price={stock.price}
      handleClick={sellStock}
    />
    )

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioElements}
    </div>
  );
}

export default PortfolioContainer;
