import React from "react";

// const ProductItem = (props) => {
//     return (
//         <div>
//         <h3>{props.product.name}</h3>
//         <h3>$ {props.product.price}</h3>
//         <p> {props.product.description} </p>
//     </div>
//     )
// }

//! Instead of using dot notation like above where we would have to call upon each property, we can use destructuring.
const ProductItem = (props) => {
    const {name, price, description} = props.product
    return (
        <div>
        <h3>{name}</h3>
        <h3>$ {price}</h3>
        <p> {description} </p>
    </div>
    )
}

export default ProductItem