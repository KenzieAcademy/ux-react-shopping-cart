import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  const handleDecrementQuantity=()=>
  props.onDecreaseQuantity(props.item.id);
  const handleIncrementQuantity=()=>
  props.onIncreaseQuantity(props.item.id);
  return (
    <span>
      {props.item.name} - {props.item.price} -
      <Quantity item={props.item}
       onIncreaseQuantity={handleIncrementQuantity}
       onDecreaseQuantity={handleDecrementQuantity} />
    </span>
  );
}

export default Product;
