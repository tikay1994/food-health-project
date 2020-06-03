import React from "react";
import "./style.css";
import { Button } from "reactstrap";

function Calculation(props) {
  return (
    <div className="calculate-contain">
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
        <Button className="input-cal" color="success">
          Result
        </Button>
      </div>
    </div>
  );
}

export default Calculation;
