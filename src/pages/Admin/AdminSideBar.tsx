import { GoUpload } from "react-icons/go";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLeaderboard, MdOutlineShoppingCart } from "react-icons/md";
import { RiHome2Line, RiUserLine } from "react-icons/ri";
import { VscHistory } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function AdminSideBar() {
  const navigate = useNavigate();
  return (
    <aside className="bg-[#2C2C54] w-[70%] text-gray-300 text-2xl p-6 rounded-tr-lg rounded-br-lg absolute top-[4.5rem] left-0 lg:w-[40%]">
      <div>
        <h1 className="text-2xl py-4 font-ubuntu font-bold">CONTROL PANEL</h1>
      </div>
      <ul className="space-y-5 font-opensans font-bold overflow-y-auto h-[40%] ">
        <li className="flex items-center gap-2 bg-[#ACC3A6] p-2 rounded-lg hover:opacity-90">
          <RiHome2Line />
          <p>Dashboard</p>
        </li>
        <li
          onClick={() => navigate("/adminupload")}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-300 hover:text-black hover:opacity-90 hover:translate-x-2"
        >
          <GoUpload />
          <p>Upload</p>
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-300 hover:text-black hover:opacity-90">
          <RiUserLine />
          <p>Profile</p>
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-300 hover:text-black hover:opacity-90">
          <MdOutlineLeaderboard />
          <p>Leaderboard</p>
        </li>
        <li
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-300 hover:text-black hover:opacity-90"
          onClick={() => navigate("/adminnotification")}
        >
          <MdOutlineShoppingCart />
          <p>Orders</p>
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-300 hover:text-black hover:opacity-90">
          <IoSettingsOutline />
          <p>Settings</p>
        </li>

        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-300 hover:text-black hover:opacity-90">
          <VscHistory />
          <p>History</p>
        </li>

        <li className="flex items-center gap-2 p-2 rounded-lg text-red-600 hover:bg-slate-300 hover:text-black hover:opacity-90">
          <IoLogOutOutline />
          <p>Logout</p>
        </li>
      </ul>
    </aside>
  );
}
