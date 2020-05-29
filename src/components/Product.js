import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  const handleIncrease = () => props.onIncrease(props.item.id);
  const handleDecrease = () => props.onDecrease(props.item.id);
  return (
    <span>
      {props.item.name} - {props.item.price} -
      <Quantity onIncrease={handleIncrease} onDecrease={handleDecrease} amount={props.item.quantity} />
    </span>
  );
}

export default Product;
