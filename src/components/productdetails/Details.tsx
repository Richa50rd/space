import { SlLike } from "react-icons/sl";
import { TbCurrencyNaira } from "react-icons/tb";

import Imageslide from "./ImageSlider";

import ShoeSize from "../Size";
import Itemquantity from "../Itemquantity";
import { useCart } from "../context/UseCart";
import { CartItem } from "../context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  size: number;
  image: string;
  description: string;
  initialQuantity?: number;
}

const Details: React.FC<Product> = ({
  id,
  name,
  price,
  size,
  image,
  initialQuantity,
  description,
}) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const newItem: CartItem = {
      id,
      name,
      price,
      size,
      image,
      quantity: 1,
    };
    addToCart(newItem);
  };

  return (
    <div className="p-2 space-y-4">
      <Imageslide />

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{name}</h1>
        <SlLike />
      </div>
      <div>
        <h3 className="flex items-center">
          <TbCurrencyNaira />
          {price}
        </h3>
      </div>
      <p>{description}</p>
      <div className="flex justify-between items-center">
        <h1 className="capitalize text-xl font-bold">select size</h1>
        <ShoeSize id={id} size={size} />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="capitalize text-xl font-bold">Quantity:</h1>
        <Itemquantity id={id} initialQuantity={initialQuantity} />
      </div>
      <button
        onClick={handleAddToCart}
        className="text-white w-full p-3 bg-blue-500 text-xl rounded-full"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default Details;
