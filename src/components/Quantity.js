import React from "react";

function Quantity(props) {
  return (
    <span>
      <button onClick={props.onDecrease}>-</button>
      {props.amount}
      <button onClick={props.onIncrease}>+</button>
    </span>
  );
}

export default Quantity;
