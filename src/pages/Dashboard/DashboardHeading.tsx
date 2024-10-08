import { useState } from "react";
import { CiLogout, CiSettings, CiUser } from "react-icons/ci";
import {
  MdClose,
  MdOutlineFavoriteBorder,
  MdOutlineHistory,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiExchange2Line } from "react-icons/ri";
import { TbShoppingCartBolt } from "react-icons/tb";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BiMenuAltLeft } from "react-icons/bi";
export default function DashboardHeading() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [toggleDashMenu, setToggleDashMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <nav className="flex justify-between items-center p-2 sticky top-0 z-50 bg-lime-200">
        <button id="btn" onClick={() => setToggleDashMenu((o) => !o)}>
          {toggleDashMenu ? <MdClose size={35} /> : <BiMenuAltLeft size={35} />}
        </button>
        <div>
          <form onClick={handleSearch} className="relative ">
            <input
              type="text"
              className="border-2 rounded-full bg-slate-100 p-3 placeholder:text-xl placeholder:font-playfair placeholder:text-black  focus:outline-none lg:w-full"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="search"
            />
          </form>
        </div>
        <div className="space-x-3 lg:space-x-5">
          <button onClick={() => navigate("/user")}>
            <CiUser size={35} />
          </button>
          <button onClick={() => navigate("/cartitems")}>
            <PiShoppingCartSimple size={35} />
          </button>
        </div>
      </nav>
      <ul
        id="bar"
        className={` flex flex-col  absolute space-y-6 font-opensans font-bold w-[60%] p-4 h-[55%] bg-lime-200 text-slate-700 rounded-br-xl shadow-md text-xl  ${
          toggleDashMenu ? "flex" : "hidden"
        }`}
      >
        <li
          onClick={() => navigate("/trade")}
          className=" text-2xl p-2 rounded-lg  flex items-center gap-2"
        >
          <RiExchange2Line />
          Trade
        </li>
        <li
          onClick={() => navigate("/orders")}
          className=" p-2 rounded-lg  flex items-center gap-2"
        >
          <TbShoppingCartBolt />
          Orders
        </li>
        <li
          onClick={() => navigate("/favourite")}
          className=" p-2 rounded-lg  flex items-center gap-2"
        >
          <MdOutlineFavoriteBorder />
          Favourite
        </li>
        <li
          onClick={() => navigate("/history")}
          className="  p-2 rounded-lg  flex items-center gap-2"
        >
          <MdOutlineHistory />
          History
        </li>
        <li
          onClick={() => navigate("/usersettings")}
          className=" p-2 rounded-lg font-bold flex items-center gap-2"
        >
          <CiSettings />
          Settings
        </li>
        <li className="font-ubuntu text-2xl text-red-600 p-2 rounded-lg font-bold flex items-center gap-2">
          <CiLogout /> Logout
        </li>
      </ul>
    </>
  );
}
