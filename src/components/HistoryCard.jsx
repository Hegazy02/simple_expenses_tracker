import "./HistoryCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";
const HistoryCard = ({ transaction }) => {
  const { setTransactions } = useContext(TransactionsContext);
  var isPositive = transaction.amount > 0 ? true : false;
  var HistoryCardClass =
    "history-card " + (isPositive ? "history-card-plus" : "history-card-minus");
  return (
    <>
      <div className="card">
        <div className={HistoryCardClass}>
          <p className="history-name">{transaction.name}</p>
          <p className="history-amount">{transaction.amount}</p>
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-button"
          onClick={() =>
            setTransactions({
              type: "DELETE_TRANSACTION",
              payload: transaction.id,
            })
          }
        />
      </div>
    </>
  );
};

export default HistoryCard;
