import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div className="product-list">
    <h2> 🏪 Produtos Disponíveis:</h2>
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Acões</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>R${product.price.toFixed(2)}</td>
            <td>
              <button className='addButton' onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductList;