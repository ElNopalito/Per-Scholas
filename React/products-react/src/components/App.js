import './App.css';
import React from 'react';

import Navbar from './Navbar';
import ProductsList from './ProductsList';
import productsData from '../data/productsData';


function App() {
  return (
    <div className="App">
      <Navbar />
        {/* We are importing productsData and passing it to the app component with the ProductsList component. To do so, we must create a key name and in brackets{}, we pass in productsData*/}
      <ProductsList products={productsData} />
    </div>
  );
}
export default App
