import { createContext, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseItmQty: (id: string, quantity: number) => void;
  decreaseItmQty: (id: string, quantity: number) => void;
  clearCartList: () => void;
}
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
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
        clearCartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
