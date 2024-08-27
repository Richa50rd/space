import { SlLike } from "react-icons/sl";
import { TbCurrencyNaira } from "react-icons/tb";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Imageslide from "./ImageSlider";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Details: React.FC<Product> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => addToCart(id);

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
        <h1>select size</h1>
        <select className="block  px-4 py-2 mt-2 border">
          <option value={40} className="py-1">
            40
          </option>
          <option value={41} className="py-1">
            41
          </option>
          <option value={42} className="py-1">
            42
          </option>
          <option value={43} className="py-1">
            43
          </option>
          <option value={44} className="py-1">
            44
          </option>
          <option value={45} className="py-1">
            45
          </option>
        </select>
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
