import Products from "../../pages/ProductPage/Products";
import { useProduct } from "../context/ProductContext";

export default function ProductList() {
  const products = useProduct();
  return (
    <div>
      {products.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
  );
}
