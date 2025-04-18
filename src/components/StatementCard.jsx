import React from "react";
import StatementItem from "./StatementItem";
import "./StatementCard.css";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";
const StatementCard = () => {
  const { state } = useContext(TransactionsContext);
  const getIncome = () =>
    state.transactions.reduce(
      (state, current) => (current.amount > 0 ? state + current.amount : state),
      0
    );
  const getExpenses = () =>
    state.transactions.reduce(
      (state, current) => (current.amount < 0 ? state + current.amount : state),
      0
    );

  return (
    <div className="statement-card">
      <StatementItem
        title="INCOME"
        amount={"$" + getIncome()}
        className="plus"
      />
      <StatementItem
        title="EXPENSE"
        amount={"$" + getExpenses()}
        className="minus"
      />
    </div>
  );
};

export default StatementCard;
