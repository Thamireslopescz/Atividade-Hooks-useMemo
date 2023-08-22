import React, { useState, useMemo } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const productsData = [
  { id: 1, name: '🍎 Maçã', price: 2.5 },
  { id: 2, name: '🍌 Banana', price: 1.5 },
  { id: 3, name: '🍊 Laranja', price: 1.0 },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  const addToCart = product => {
    const existingItem = cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = product => {
    const updatedCart = cartItems.filter(item => item.product.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <h1 className='title'>Mercado Growdev</h1>
      <ProductList products={productsData} addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className="total">
        <p>Valor Total: R${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
