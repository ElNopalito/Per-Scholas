import React from "react";
import ProductItem from "./ProductItem";


//! We are using props as an arguement in this function. To check, we log props.product and check console to make sure it has an array. In app.js, we named our key to products.
// const ProductsList = (props) =>{
//     console.log(props.products);
//     return(
//         <div>
//             <h2>Products</h2>
//             !To call up a specfic opbject in array, we use syntax below.
//             <h3> {props.products[0].name} </h3>
//         </div>
//     )
// }

// ! Naming all products in array to show on page
const ProductsList = (props) => {
    return(
        <div>
            <h2>Products</h2>
              {/*props.products.map((product, idx) => <ProductItem product={item} key={idx} />)*/}  
             
           {/*Using Tenerary operator(if/else) where if the item is inStock(check productData). If not, it will render product.name is out of stock in an h3*/}
           {/* {
//                 props.products.map( (product, idx) => item.inStock ? (
//                      <ProductItem product={item} key={idx}/>
//                      ) : 
//                      ( 
//                      <h3> key={idx} {product.name} is out of stock</h3>
//                      )
//                      )} */}
            {
                props.products.map(
                     (item, idx ) => item.inStock  && <ProductItem product={item} key={idx} addToCart={props.addToCart} />)
            }
        </div>
    )
}

export default ProductsList

