import React from "react";
import ProductItem from "./ProductItem";


const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart</h1>

      {
          props.shoppingCartItems.map(( item, idx) => <ProductItem product={item} key={idx}/>)
      }
    </div>
  );
};

export default ShoppingCart;
