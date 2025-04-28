import React, { createContext, useState } from 'react';

// 1. Buat Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState("");
  const addToCart = (anime) => {
    setCart((prevCart) => {
      const findAnime = prevCart.find((item) => item.id === anime.id);

      if (findAnime) {
        // Kalau sudah ada, tambahin quantity
        return prevCart.map((item) =>
          item.id === anime.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Kalau belum ada, masukin item baru ke cart
        return [...prevCart, { ...anime, quantity: 1 }];
      }
    });
    
  };

  const deleteFromCart = (id) => {
    setCart((prevItem)=>prevItem.filter((item)=>item.id!==id))
  }

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = () => {
    return cart.reduce((total, item)=> total + item.price * item.quantity,0)
  }
  

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, clearCart, totalPrice, notification}}>
      {children}
    </CartContext.Provider>
  );
};
