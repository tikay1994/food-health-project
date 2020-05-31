import React from "react";
import "./style.css";

function Calculation(props) {
  return (
    <div className="calculate-component">
      <div className="input-cal">
        <p>Which food did you eat?</p>
        <input placeholder="Enter your food"></input>
      </div>
      <div className="input-cal">
        <p>Unit</p>
        <input placeholder="g, kg, piece, pound, ..."></input>
      </div>
      <div className="input-cal">
        <p>Count</p>
        <input placeholder="1, 2, 3, ..."></input>
      </div>
    </div>
  );
}

export default Calculation;
