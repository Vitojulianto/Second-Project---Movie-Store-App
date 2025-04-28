import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

import NavbarLog from '../Fragments/NavbarLog';

const Cart = () => {
  const { cart, deleteFromCart, clearCart, totalPrice} = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="text-center text-white mt-10">
        <h2 className="text-2xl font-bold text-slate-500">Cart is empty</h2>
        <button
          onClick={() => navigate('/home')}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
    <NavbarLog />
    
    <div className="max-w-screen-md mx-auto p-6 text-white">
    
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id} className="bg-white text-black rounded-lg p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>Price: Rp {item.price.toLocaleString('id-ID')}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
          <button
            onClick={() => deleteFromCart(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-6">
        <h2 className="text-2xl font-bold mb-4">
          Total: Rp {totalPrice().toLocaleString('id-ID')}
        </h2>

        <div className="flex justify-end space-x-4">
          <button
            onClick={clearCart}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
          <p className="font-bold text-black bg-yellow-300 py-2 px-4 rounded-full">{totalPrice().toLocaleString('id-ID')}</p>

          <button
            onClick={() => {
              alert('Checkout berhasil!');
              clearCart();
              navigate('/formshipping')
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
