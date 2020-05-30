import React from "react";

function Calculation(props) {
  return (
    <div>
      <div>
        <p>Which food did you eat?</p>
        <input placeholder="Enter your food"></input>
      </div>
      <div>
        <p>Unit</p>
        <input placeholder="g, kg, piece, pound, ..."></input>
      </div>
      <div>
        <p>Count</p>
        <input placeholder="1, 2, 3, ..."></input>
      </div>
    </div>
  );
}

export default Calculation;
