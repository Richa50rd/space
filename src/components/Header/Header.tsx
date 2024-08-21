import { LuUserPlus } from "react-icons/lu";
import { PiShoppingCartThin } from "react-icons/pi";
import { SlLogin } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center p-3 bg-black text-white sticky top-0 z-50 opacity-85 lg:px-[5rem]">
      <div>
        {/* <img src="/fusion.png" className="w-[50px]" /> */}
        <p className="font-ubuntu text-2xl sm:text-3xl">FusionMart</p>
      </div>
      <div className="flex space-x-4">
        <button
          className=" rounded-lg border-gray-500 p-1 text-l font-robotomono shadow-2xl sm:text-xl sm:p-2"
          onClick={() => navigate("/login")}
        >
          <SlLogin size={25} />
        </button>
        <button
          className=" rounded-lg border-gray-500 p-1 text-l font-robotomono sm:text-xl sm:p-2"
          onClick={() => navigate("/signup")}
        >
          <LuUserPlus size={25} />
        </button>
        <button
          className="rounded-lg border-gray-500 p-1 text-l font-robotomono sm:text-xl sm:p-2"
          onClick={() => navigate("/login")}
        >
          <PiShoppingCartThin size={25} />
        </button>
      </div>
    </nav>
  );
}
