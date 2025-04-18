import InputData from "./InputData";
import "./AddNewTransaction.css";
import { useState } from "react";
import CustomButton from "./CustomButton";
const AddNewTransaction = () => {
  const [transaction, setTransaction] = useState({});
  return (
    <div className="add-new-transaction">
      <h4 className="section-title">Add new transaction</h4>
      <div>
        <InputData
          title={"Text"}
          plachHolder={"Enter text..."}
          type={"text"}
          onChange={(e) =>
            setTransaction({ ...transaction, name: e.target.value })
          }
        />
        <InputData
          title={"Amount"}
          plachHolder={"Enter amount..."}
          type={"number"}
          min={0}
          onChange={(e) =>
            setTransaction({ ...transaction, amount: +e.target.value })
          }
        />
      </div>
      <CustomButton transaction={transaction} />
    </div>
  );
};
export default AddNewTransaction;
