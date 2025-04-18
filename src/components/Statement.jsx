import React, { useContext } from "react";
import "./Statement.css";
import StatementCard from "./StatementCard";
import { TransactionsContext } from "../contexts/TransactionContext";

const Statement = () => {
  const { state } = useContext(TransactionsContext);
  const getBalance = () => {
    return state.transactions.reduce(
      (state, current) => state + current.amount,
      0
    );
  };
  return (
    <div className="statement">
      <div className="balance-div">
        <p>YOUR BALANCE</p>
        <p className="balance-number">${getBalance()}</p>
      </div>
      <StatementCard />
    </div>
  );
};

export default Statement;
