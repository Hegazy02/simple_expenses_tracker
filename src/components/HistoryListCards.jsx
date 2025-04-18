import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryListCards = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <HistoryCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default HistoryListCards;
