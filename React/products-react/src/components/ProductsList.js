import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import ProductsList from './ProductsList';
import productsData from '../data/productsData';
import Form from './Form';
import ShoppingCart from './ShoppingCart';

//!-----------------------------------------------------------------Main App Component--------------------------------------------------------------
class App extends Component { 
//! A state is a built-in React object that is used to contain data or information about the component. We would presumably use state because different Components may serve many different functions.
//! State is also able to re-render an application if any information within the state is updated in any way
//! When using state, we must use class component
  state = {
    //! In ES6 syntax, if the key and value are the same, you can just input the key without having to input value 
    //! A Component can only have 1 state but can have multiple information in the state. 
    productsData: productsData,
    shoppingCartItems: [],
    productName: '' ,
    productPrice: 0,
    productDescription: ''
    //! Because state re-renders information in a components, we need to set the value of the input box in state. Whatever we input in state will show in value box. THIS IS NOT LONGER NEEDED AS WE ARE USING SETSTATE METHOD
    // value: ''
  }
//!------------------------------------------------------------------Where state will re-render in browser----------------------------------------------------
//! Because our state is static, it would be annoying to have to change it directly, this function acts like an event listener.
  handleChange = (event) => {
    //! This is like an eventlistener, just with different syntax
    console.log(event.target.value);
    this.setState({ [event.target.id] : event.target.value})
  }
  //! This method will allow the state to refresh the page with the values we inputed in the form in the console.
  handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: this.state.productName,
      price: this.state.productPrice,
      description: this.state.productDescription,
      inStock: true
    }
    console.log(newProduct);
//!-----------------------------------------------------------------Where State will append information to current list/array---------------------------------------
    //! We are updating the array by creating another array to add to productsData array. When we input information, it will create another array to add to productsData
    this.setState({
    productsData: [...this.state.productsData, newProduct],
    productName: '',
    productPrice: 0,
    productDescription: ''  })
  }

//!----------------------------------------------------------------Adding Items to Shopping Cart------------------------------------------------------------
addToCart = (item) => {
  console.log(item);
}
//!----------------------------------------------------------------What shows in browser--------------------------------------------------------------------
  render(){
    return (
      <div className="App">
        <Navbar />
        {/*Any time there is a object in the state, we will always use this.state because it is in the state and it is a object that will be manipulated and re-renders*/}
        <ShoppingCart shoppingCartItems = {this.state.shoppingCartItems}/>
          {/* This form was originally hardcoded in the App component. However, we created a Form component and moved the information there. But because handleChange and handleSubmit are not  global methods, they would not be in the Form.js file. To render them, we manipulate it here in the Form component within the App component using state.*/}
       <Form 
        handleSubmit = {this.handleSubmit}
        handleChange = {this.handleChange}
        productName = {this.state.productName}
        productPrice = {this.state.productPrice}
        productDescription = {this.state.productDescription} 
        />
          {/* We are importing productsData and passing it to the App component with the ProductsList component. To do so, we must create a key name and in brackets{}, we pass in productsData*/}
        <ProductsList products={this.state.productsData} addToCart={this.addToCart} />
      </div>
    );
  }
}
export default App
