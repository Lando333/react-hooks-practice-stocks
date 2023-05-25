import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {

  const stockElements = stocks.map(stock => 
    <Stock
      key={stock.id}
      id={stock.id}
      ticker={stock.ticker}
      name={stock.name}
      type={stock.type}
      price={stock.price}
      handleClick={buyStock}
    />)

  return (
    <div>
      <h2>Stocks</h2>
      {stockElements}
    </div>
  );
}

export default StockContainer;
