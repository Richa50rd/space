import { useState } from "react";
import AdminHeading from "./AdminHeading";
import { useProduct } from "../../components/context/ProductContext";

export default function AdminUpload() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  /////////////////////////////////////////////////////
  const { addProduct, deleteProduct, products } = useProduct();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
  });
  const handleAddProduct = () => {
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    addProduct({ id, ...newProduct });
    setNewProduct({ name: "", price: 0, image: "", description: "" });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //handle form submission send data to the backend
  };
  return (
    <section>
      <AdminHeading />
      <form onSubmit={handleSubmit} className="p-4">
        <div>
          <label className="font-josefinsans text-xl">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="font-josefinsans text-xl">Price</label>
          <input
            type="number"
            placeholder="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="font-josefinsans text-xl">Image</label>
          <input
            type="file"
            placeholder="image url"
            value={newProduct.image}
            onChange={(e) => setImage(e.target.files![0])}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          onClick={handleAddProduct}
          className="bg-blue-500 text-white p-2 mt-4"
        >
          Upload
        </button>
      </form>
      <div>
        <h2 className="text-xl mb-2">Existing Products</h2>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center mb-2"
            >
              <span>{product.name}</span>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 text-white p-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
