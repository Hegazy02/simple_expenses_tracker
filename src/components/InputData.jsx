import React from "react";
import "./InputData.css";

const InputData = ({ title, plachHolder, type, min, onChange }) => {
  return (
    <div className="input-data-div">
      <p>{title}</p>
      <div className="input-data">
        <input type={type} name="" id="" placeholder={plachHolder} min={min}  onChange={onChange}/>
      </div>
    </div>
  );
};

export default InputData;
