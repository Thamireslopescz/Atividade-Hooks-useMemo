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
  // State para armazenar os itens do carrinho
  const [cartItems, setCartItems] = useState([]);

  // Cálculo do valor total do carrinho SEM useMemo (apenas para fins de comparação)
  /*const total = () => {
    console.log("Calculando sem useMemo");
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };*/
    

  // useMemo é usado para calcular o valor total do carrinho apenas quando cartItems é modificado 
  const total = useMemo(() => {
    console.log("Calculando com useMemo");

    // Calcula o valor total somando o preço de cada produto multiplicado pela quantidade
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }, [cartItems]);

  // Função para adicionar um produto ao carrinho
  const addToCart = product => {
    const existingItem = cartItems.find(item => item.product.id === product.id);

    if (existingItem) {
      // Atualiza a quantidade se o produto já estiver no carrinho
      const updatedCart = cartItems.map(item =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Adiciona um novo item ao carrinho se o produto ainda não estiver nele
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  // Função para remover um produto do carrinho
  const removeFromCart = product => {
    // Filtra os itens do carrinho, mantendo apenas os que não correspondem ao produto removido
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
