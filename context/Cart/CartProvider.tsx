import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ totalPrice: 0, items: [] });

  const addToCart = (product) => {
    if (!cart.items.some((item) => item.name === product.name))
      setCart({
        totalPrice: cart.totalPrice + product.price,
        items: [
          ...cart.items,
          { ...product, qty: 1, totalPrice: product.price },
        ],
      });
    else {
      const ProductIndex = cart.items.findIndex(
        (item) => item.name === product.name
      );
      const newArr = [...cart.items];
      newArr[ProductIndex].qty++;
      newArr[ProductIndex].totalPrice += newArr[ProductIndex].price;
      setCart({
        totalPrice: cart.totalPrice + product.price,
        items: newArr,
      });
    }
  };
  const removeFromCart = (product) => {};

  return (
    <CartContext.Provider
      value={{
        cartItems: cart.items,
        totalPrice: cart.totalPrice,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
