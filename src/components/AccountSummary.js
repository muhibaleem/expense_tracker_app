import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const AccountSummary = () => {

const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transation) => transation.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


    return(
        <div className="inc-exp-container">
      <div>
        <i><h4>Income</h4></i>
        <i><p className="money plus">+${income}</p></i>
      </div>
      <div>
        <i><h4>Expense</h4></i>
        <i><p className="money minus">-${expense}</p></i>
      </div>
    </div>
    )
}