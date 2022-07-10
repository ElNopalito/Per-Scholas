import React from "react";
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
const ProductsList = (props) => {
    console.log(props.products);
    return(
        <div>
            <h2>Products</h2>
            
            {/*props.products.map((product, idx) => <ProductItem item={product} key={idx} />)*/}  
             
           {/*Using Tenerary operator(if/else) where if the item is inStock(check productData). If not, it will render product.name is out of stock in an h3*/}
           {/* {
//                 props.products.map( (item, idx) => item.inStock ? (
//                      <ProductItem product={item} key={idx}/>
//                      ) : 
//                      ( 
//                      <h3> key={idx} {item.name} is out of stock</h3>
//                      )
//                      )} */}
            {/* Double End Operator. On either side of the operator, both statements must be true. If one statement is not, the item will not show on list*/ }
            {
                props.products.map(
                     (item, idx ) => item.inStock  && <ProductItem product={item} key={idx} addtoCart={props.addtoCart} />)
            }
        </div>
    )
}

export default ProductsList

