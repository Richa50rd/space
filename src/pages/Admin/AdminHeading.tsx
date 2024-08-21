import { CgMenuLeftAlt } from "react-icons/cg";

import { IoIosNotificationsOutline } from "react-icons/io";
import AdminSideBar from "./AdminSideBar";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHeading() {
  const navigate = useNavigate();
  const [adminMenu, setAdminMenu] = useState(false);
  return (
    <>
      <nav className="bg-[#2C2C54] p-2 sticky top-0 z-50">
        <div className={`${adminMenu ? "flex" : "hidden"} `}>
          <AdminSideBar />
        </div>
        <nav className="flex justify-between items-center text-white">
          <button className="lg:" onClick={() => setAdminMenu((op) => !op)}>
            {adminMenu ? (
              <AiOutlineClose size={43} />
            ) : (
              <CgMenuLeftAlt size={43} />
            )}
          </button>
          <div className="flex justify-between items-center space-x-4 text-white ">
            <button onClick={() => navigate("/adminnotification")}>
              <IoIosNotificationsOutline size={43} />
            </button>
            <img
              src="./images/Admin/id.jpg"
              className="w-[50px] rounded-[50%]"
              alt="Admin"
            />
          </div>
        </nav>
      </nav>
    </>
  );
}
