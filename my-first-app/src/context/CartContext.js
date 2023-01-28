import { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

const initCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(initCart);

  const addToCart = (addedItem) => {
    // setCart([...cart, addedItem]);
    const newCart = cart.slice();
    newCart.push(addedItem);
    setCart(newCart);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isInCart, emptyCart, totalCart, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
