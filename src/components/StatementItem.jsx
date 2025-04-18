import React from "react";
import "./StatementItem.css";

const StatementItem = ({ title, amount, className }) => {
  return (
    <div className="statement-item">
      <p>{title}</p>
      <p className={className}>{amount}</p>
    </div>
  );
};

export default StatementItem;
