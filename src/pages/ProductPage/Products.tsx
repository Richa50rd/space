import { MdAddShoppingCart } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { CartProvider, useCart } from "../../components/context/CartContext";
import { useProduct } from "../../components/context/useProduct";
import CartItems from "../Cartpage/CartItems";

interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

const Products: React.FC<ProductProps> = ({ name, image, price }) => {
  // const { addToCart } = CartProvider();
  // const { products } = useProduct();
  const handleAddToCart = () => {
    addToCart({ CartItems });
  };
  const navigate = useNavigate();
  return (
    <section className="p-3 space-y-4">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-1 rounded-md ">
          <img
            src="./images/finance/crypto/btc.png"
            className="w-[60px] rounded-full"
            alt=""
          />
          <img
            src="./images/finance/crypto/sol.jfif"
            className="w-[70px] rounded-md"
            alt=""
          />
          <img
            src="./images/finance/crypto/usdc.png"
            className="w-[70px] rounded-full"
            alt=""
          />
          <img
            src="./images/finance/crypto/usdt.png"
            className="w-[70px] rounded-md"
            alt=""
          />
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <p className="font-platypi text-l">
            Buy & sell your crypto assests in exchange for fiat. fast and safe
            transaction.
          </p>
          <button
            onClick={() => navigate("/trade")}
            className="border-2 rounded-lg p-2 font-ubuntu bg-lime-200 justify-start"
          >
            Trade Now
          </button>
        </div>
      </div>
      <div className="p-2 bg-slate-50 rounded-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="rounded-lg">
            <img src={image} className="w-[200px] rounded-lg" alt="" />
            <h1 className="font-bold font-ubuntu my-2">{name}</h1>
            <div className="flex justify-between items-center">
              <p className="flex items-center">
                <TbCurrencyNaira size={25} />
                {price.toFixed(2)}
              </p>
              <button className="text-xl bg-lime-200 border-2 p-2 rounded-lg">
                <MdAddShoppingCart size={25} />
              </button>
            </div>
          </div>
          <div>
            <img
              src="./images/footwears/nk-001.jpg"
              className="w-[200px] rounded-lg"
              alt=""
            />
            <h1 className="font-bold font-ubuntu my-2">Nike AirForce</h1>
            <div className="flex justify-between items-center">
              <p className="flex items-center">
                <TbCurrencyNaira size={25} />
                10,000.00
              </p>
              <button className="text-xl bg-lime-200 border-2 p-2 rounded-lg">
                <MdAddShoppingCart size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-slate-50 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg">
            <img
              src="./images/footwears/nk-001.jpg"
              className="w-[200px] rounded-lg"
              alt=""
            />
            <h1 className="font-bold font-ubuntu my-2">Nike AirForce</h1>
            <div className="flex justify-between items-center">
              <p className="flex items-center">
                <TbCurrencyNaira size={25} />
                10,000.00
              </p>
              <button className="text-xl bg-lime-200 border-2 p-2 rounded-lg">
                <MdAddShoppingCart size={25} />
              </button>
            </div>
          </div>
          <div>
            <img
              src="./images/footwears/nk-001.jpg"
              className="w-[200px] rounded-lg"
              alt=""
            />
            <h1 className="font-bold font-ubuntu my-2">Nike AirForce</h1>
            <div className="flex justify-between items-center">
              <p className="flex items-center">
                <TbCurrencyNaira size={25} />
                10,000.00
              </p>
              <button className="text-xl bg-lime-200 border-2 p-2 rounded-lg">
                <MdAddShoppingCart size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
