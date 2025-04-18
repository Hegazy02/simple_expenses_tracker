import React from "react";
import "./history.css";
import HistoryListCards from "./HistoryListCards";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";
const History = () => {
  const {state} = useContext(TransactionsContext);
  return (
    <div className="history">
      <h4 className="section-title">History</h4>
      <HistoryListCards transactions={state.transactions} />
    </div>
  );
};

export default History;
