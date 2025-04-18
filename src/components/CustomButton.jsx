import React from "react";
import "./CustomButton.css";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const CustomButton = ({ transaction: currentTransaction }) => {
  const { state, setTransactions } = useContext(TransactionsContext);

  return (
    <div className="custom-button-div">
      <input
        className="custom-button"
        type="submit"
        value="Submit"
        onClick={() =>
          setTransactions({
            type: "ADD_TRANSACTION",
            payload: {
              id: state.transactions.length + 1,
              name: currentTransaction.name,
              amount: currentTransaction.amount,
            },
          })
        }
      />
    </div>
  );
};

export default CustomButton;
