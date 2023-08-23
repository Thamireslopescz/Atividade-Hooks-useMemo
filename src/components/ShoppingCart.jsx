import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart }) => (
  <div className="shopping-cart product-list">
  <h2>🛒 Carrinho de Compras:</h2>
  <table>
    <thead>
      <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Valor</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map(item => (
        <tr key={item.product.id}>
          <td>{item.product.name}</td>
          <td>{item.quantity} kg</td>
          <td>R$: {(item.product.price * item.quantity).toFixed(2)}</td>
          <td>
            <button className='remove' onClick={() => removeFromCart(item.product)}>Remover</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

export default ShoppingCart;
