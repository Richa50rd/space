import { SlLike } from "react-icons/sl";
import { TbCurrencyNaira } from "react-icons/tb";
import ImageSlider from "./ImageSlider";
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

const Details: React.FC<ProductCardProps> = ({ product }) => {
  const images = [];
  return (
    <div className="p-2">
      <ImageSlider images={images} />

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <SlLike />
      </div>
      <div>
        <h3 className="flex items-center">
          <TbCurrencyNaira />
          {product.price.toFixed(2)}
        </h3>
      </div>
      <p>{product.description}</p>
      <div>select size</div>
      <button className="text-white w-full p-3 bg-blue-500 text-xl rounded-full">
        Add to Cart
      </button>
    </div>
  );
};
export default Details;
