import { TbCurrencyNaira } from "react-icons/tb";
import DashboardHeading from "../Dashboard/DashboardHeading";
import { RiDeleteBin7Line } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/context/CartContext";

export default function CartItems() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <DashboardHeading />
      <section className="p-4 ">
        {cartItems.length === 0 ? (
          <p className="text-red-600 text-sm">Your cart is empty.</p>
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
                        className="  text-red-600 p-3 rounded-md text-xl"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <RiDeleteBin7Line size={25} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl">size</h3>
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
                    <div className="flex items-center justify-between">
                      <h1 className=" flex items-center text-blue-600 text-xl font-bold">
                        <TbCurrencyNaira size={30} />
                        {item.price.toFixed(2)}
                      </h1>
                      <h1 className="flex items-center gap-4 text-xl">
                        <select
                          value={item.quantity}
                          className="block w-full px-4 py-2 mt-2 border"
                        >
                          <option value={1} className="py-1">
                            1
                          </option>
                          <option value={2} className="py-1">
                            2
                          </option>
                          <option value={3} className="py-1">
                            3
                          </option>
                          <option value={4} className="py-1">
                            4
                          </option>
                          <option value={5} className="py-1">
                            5
                          </option>
                        </select>
                      </h1>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col items-center my-5">
          <button
            className="border p-3 text-xl text-gray-700 font-bold bg-lime-300 rounded-lg shadow-xl"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </div>
      </section>
    </div>
  );
}
