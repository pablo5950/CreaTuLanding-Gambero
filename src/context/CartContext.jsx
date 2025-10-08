import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, cantidad) => {
    if (!producto || cantidad <= 0) return;

    const itemExistente = cart.find(item => item.id === producto.id);

    if (itemExistente) {
      const cartActualizado = cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCart(cartActualizado);
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  const removeItem = (id) => {
    if (!id) return;
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + (item.cantidad || 0), 0);

  const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0) * (item.cantidad || 0), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
