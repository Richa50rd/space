import { TbCurrencyNaira } from "react-icons/tb";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/context/CartContext";
import { IoChevronBack } from "react-icons/io5";
import { PiTrashThin } from "react-icons/pi";
import { useContext } from "react";
import Itemquantity from "../../components/Itemquantity";

export default function CartItems() {
  const { cartItems, removeFromCart, clearCartList } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <button
          className="p-2 rounded-md bg-slate-100"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack size={35} />
        </button>
        <h1 className="text-sky-800 text-2xl font-ubuntu font-semibold capitalize text-center ">
          Cart
        </h1>
        <button
          onClick={() => clearCartList([])}
          className="p-2 rounded-md bg-slate-100"
        >
          <PiTrashThin size={35} />
        </button>
      </div>
      <section className="p-4 ">
        {cartItems.length === 0 ? (
          <p className="text-red-700 text-center text-xl ">
            Your cart is empty.
          </p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="flex gap-2  border border-gray-500 p-1 rounded-lg ">
                  <img
                    src={item.image}
                    className="w-[120px] rounded-tl-lg rounded-bl-lg"
                    alt=""
                  />
                  <div className="w-full ">
                    <div className="flex justify-between items-center">
                      <h1 className="font-bold font-playfair">{item.name}</h1>
                      <button
                        className="text-red-600 p-3 rounded-md text-xl"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <RiDeleteBin7Line size={25} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-l">Quantity</h3>
                      <Itemquantity
                        id={item.id}
                        initialQuantity={item.quantity}
                      />
                    </div>

                    <h3 className=" flex items-center text-blue-600 text-xl font-bold text-right">
                      <TbCurrencyNaira size={30} />
                      {item.price.toFixed(2)}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center my-5">
            <button
              className="border p-3 text-xl text-gray-700 font-bold bg-lime-300 rounded-lg shadow-xl"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
