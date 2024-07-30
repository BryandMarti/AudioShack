import React, { useState, useEffect } from 'react';
import '../scripts_css/cartPopup.css';

const CartPopup = ({ toggleCart }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const incrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId].quantity += 1;
      return updatedCart;
    });
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId].quantity > 1) {
        updatedCart[productId].quantity -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  const calculateTotalCost = () => {
    return Object.values(cart).reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  const renderCartItems = () => {
    const cartItems = Object.values(cart);
    if (cartItems.length === 0) return <p>Your cart is empty</p>;

    return (
      <div>
        {cartItems.map((item) => (
          <div key={item.Id} className="cart-item">
            <p>{item.Name} - ${item.Price}</p>
            <div className="cart-item-controls">
              <button onClick={() => decrementQuantity(item.Id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.Id)}>+</button>
            </div>
          </div>
        ))}
        <div className="cart-total">
          <h3>Total: ${calculateTotalCost().toFixed(2)}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <span className="close-button" onClick={toggleCart}>&times;</span>
        <h2>Your Cart</h2>
        {renderCartItems()}
      </div>
    </div>
  );
};

export default CartPopup;
