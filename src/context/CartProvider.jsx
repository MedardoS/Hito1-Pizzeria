import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);

    if (exists) {
      const updated = cart.map((p) =>
        p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
  };

  const increase = (id) => {
    const updated = cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setCart(updated);
  };

  const decrease = (id) => {
    const updated = cart
      .map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      )
      .filter((p) => p.quantity > 0);

    setCart(updated);
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
