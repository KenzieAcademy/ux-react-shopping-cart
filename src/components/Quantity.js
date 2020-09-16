import React from "react";

function Quantity(props) {
  
  return (
    <span>
      {props.item.quantity}
      <button onClick={props.onDecreaseQuanity}>-</button>
      {props.item.quantity}
      <button onClick={props.onIncreaseQuantity}>+</button>
    </span>
  );
}

export default Quantity;
