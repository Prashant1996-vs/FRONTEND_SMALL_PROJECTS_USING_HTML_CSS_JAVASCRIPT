import React from "react";
function Product(props) {
  return (
    <div>
      Product: {props.name}, Price: {props.price}, Quantity: {props.quantity}
    </div>
  );
}
export default Product;
