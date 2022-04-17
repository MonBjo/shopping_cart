import './App.css';
import { useState } from 'react';

import products from './assets/products.json';

import Header from './components/header';
import Product from './components/product';

function App() {
  const [cart, setCart] = useState([]);
  
  function updateCart(product) {
    console.log(product);
    const cartCopy = [...cart]; // Gör en kopia på vår array med spread operatorn (...)
    cartCopy.push(product); // Pushade in vår nya produkt i arrayen.
    setCart(cartCopy); // Uppdatera state med vår nya array
  }

  const productItems = products.map((product, index) => {
    return <Product productInfo = { product } key={ index } />
  });

  return (
    <div className="App">
      <Header />
      <section className="productWrapper">
        { productItems }
      </section>
    </div>
  );
}

export default App;