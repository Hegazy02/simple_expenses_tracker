import { createContext, useReducer } from "react";

const TransactionsContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (element) => element.id != action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

const TransactionProvider = ({ children }) => {
  const [state, setTransactions] = useReducer(reducer, {
    transactions: [],
  });

  return (
    <TransactionsContext.Provider value={{ state, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionProvider;
export { TransactionsContext };
