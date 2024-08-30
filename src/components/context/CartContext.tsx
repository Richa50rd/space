import { createContext, useState } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: number;
  image: string;
  quantity: number;
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseItmQty: (id: string, quantity: number) => void;
  decreaseItmQty: (id: string, quantity: number) => void;
  increaseSize: (id: string, size: number) => void;
  decreaseSize: (id: string, size: number) => void;
  clearCartList: () => void;
}

// create a default context value
const defaultCartContext: CartContextType = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseItmQty: () => {},
  decreaseItmQty: () => {},
  increaseSize: () => {},
  decreaseSize: () => {},
  clearCartList: () => {},
};

export const CartContext = createContext<CartContextType>(defaultCartContext);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };
  const increaseItmQty = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      )
    );
  };
  const decreaseItmQty = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity - quantity, 0) }
          : cartItem
      )
    );
  };
  const increaseSize = (id: string, size: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, size: cartItem.size + size }
          : cartItem
      )
    );
  };
  const decreaseSize = (id: string, size: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, size: Math.max(cartItem.size - size, 40) }
          : cartItem
      )
    );
  };
  const clearCartList = () => {
    setCartItems([]);
  };
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseItmQty,
        decreaseItmQty,
        increaseSize,
        decreaseSize,
        clearCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
