import './App.css';
import React from 'react';

import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';

import productsData from './data/productsData';


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
        //! We are importing productsData and passing it to the app component with the ProductsList component. To do so, we must create a key name and in bradkets{}, we pass in productsData
//       <ProductsList products={productsData} />
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsList product={productsData} />
    </div>
  );
}

export default App;
