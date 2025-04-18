import "./App.css";
import Header from "./components/Header";
import Statement from "./components/statement";
import History from "./components/History";
import AddNewTransaction from "./components/AddNewTransaction";
import TransactionProvider from "./contexts/TransactionContext";

function App() {
  return (
    <>
      <TransactionProvider>
        <Header />
        <Statement />
        <History />
        <AddNewTransaction />
      </TransactionProvider>
    </>
  );
}

export default App;
