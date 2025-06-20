import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (place) => {
    const exists = cart.find((item) => item.id === place.id);
    if (exists) {
      const updated = cart.map((item) =>
        item.id === place.id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...place, qty: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
