import { createContext, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  updateProduct: (id: number, updatedProduct: Product) => void;
}

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };
  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };
  const updateProduct = (id: number, updatedProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? updatedProduct : product))
    );
  };
  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
