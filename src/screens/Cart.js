import React from 'react';
import { useSelector } from 'react-redux';
import { cartProducts } from '../stores/cart/cartSlice';

const Cart = () => {
  // Retrieve cart products from Redux store
  const products = useSelector(cartProducts);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>Quantity: {product.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
