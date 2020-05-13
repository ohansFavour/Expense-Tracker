import React from "react";

import Header from "./components/Header";
import Balance from "./components/Balance";
import ExpenseIncome from "./components/ExpenseIncome";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import GlobalContextProvider from "./context/GlobalContext";

import "./App.css";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <ExpenseIncome />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
