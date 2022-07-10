import React from 'react';
import { Component } from 'react';
import Navbar from './Navbar';
import ProductsList from './ProductsList';
import productsData from '../data/productsData';


class App extends Component { 
//! A state is a built-in React object that is used to contain data or information about the component. We would presumably use state because different Components may serve many different functions.
//! State is also able to re-render an application if any information within the state is updated in any way
//! When using state, we must use class component
  state = {
    //! In ES6 syntax, if the key and value are the same, you can just input the key without having to input value 
    //! A Component can only have 1 state but can have multiple information in the state. 
    productsData: productsData,
    productName: '',
    productPrice: 0,
    productDescription: '',
    //! Because state re-renders information in a components, we need to set the value of the input box in state. Whatever we input in state will show in value box. THIS IS NOT LONGER NEEDED AS WE ARE USING SETSTATE METHOD
    // value: ''
  }
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
      description: this.state.productDescription
    }
    console.log(newProduct);
    //! We are updating the array by creating another array to add to productsData array. When we input information, it will create another array to add to productsData
    this.setState({productsData: [...this.state.productsData, newProduct]})
  }



  render(){
    return (
      <div className="App">
        <Navbar />
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='productName'>Product Name</label>
        {/* To connect to state, you use this.state.whateveryou'reconnecting*/}
        {/*onChange allows us to calls on handleChange which allows state to render the page when something is inputed*/}
        <input type = "text" value = {this.state.value} onChange = {this.handleChange} id='productName' />

        <label htmlFor='productPrice'>Product Price</label>
        <input type='number' value = {this.state.productPrice} onChange = {this.handleChange} id ='productPrice'></input>

        <label htmlFor='productDescription'> Product Description </label>
        <input type = 'text' value = {this.state.productDescription} onChange = {this.handleChange} id ='productDescription'></input>

        <input type = 'submit' />
        </form>
          {/* We are importing productsData and passing it to the App component with the ProductsList component. To do so, we must create a key name and in brackets{}, we pass in productsData*/}
        <ProductsList products={this.state.productsData} />
      </div>
    );
  }
}
export default App
