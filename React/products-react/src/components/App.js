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
    //! Because state re-renders information in a components, we need to set the value of the input box to an empty string because users will be inputing information in the box
    value: ''
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        {/* To connect to state, you use this.state.whateveryou'reconnecting*/}
        <input type = "text" value={this.state.value} />
          {/* We are importing productsData and passing it to the App component with the ProductsList component. To do so, we must create a key name and in brackets{}, we pass in productsData*/}
        <ProductsList products={this.state.productsData} />
      </div>
    );
  }
}
export default App
