import React from "react";
import products from "../data/productsData";
import ProductItem from "./ProductItem";

//! We are using props as an arguement in this function. To check, we log props.product and check console to make sure it has an array. In app.js, we named our key to products.
// const ProductsList = (props) =>{
//     console.log(props.products);
//     return(
//         <div>
//             <h2>Products</h2>
            //!To call up a specfic opbject in array, we use syntax below.
//             <h3> {props.products[0].name} </h3>
//         </div>
//     )
// }

//! Naming all products in array to show on page
const ProductsList = (props) =>{
    console.log(props.products);
    return(
        <div>
            <h2>Products</h2>
            {    
                props.products.map(product => <ProductItem product={product} />)}
        </div>
    )
}

export default ProductsList
