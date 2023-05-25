import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const stocksUrl = 'http://localhost:3001/stocks'

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(getStocks, [])
  function getStocks() {
    fetch(stocksUrl)
      .then(r => r.json())
      .then(setStocks)
  }

  function alphabeticalSort() {
    const strAscending = [...stocks].sort((a, b) =>
      a.name > b.name ? 1 : -1,)
    setStocks(strAscending)
  }
  function priceSort() {
    const numAscending = [...stocks].sort((a, b) => a.price - b.price);
    setStocks(numAscending)
  }

  function buyStock(stockId) {
    setPortfolio([...portfolio, stocks[stockId-1]])
  }
  function sellStock(stockId) {
    const newPortfolio = portfolio.filter(stock => stock.id !== stockId)
    setPortfolio(newPortfolio)
  }

  return (
    <div>
      <SearchBar
        alphabeticalSort={alphabeticalSort}
        priceSort={priceSort}
        // filterType={filterType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
