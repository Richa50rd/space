import DashboardHeading from "../../pages/Dashboard/DashboardHeading";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiLike, BiSolidLike } from "react-icons/bi";

export default function Favourite() {
  return (
    <div>
      <DashboardHeading />
      <section className="p-2 grid grid-cols-2 gap-3">
        <div className="p-3 border rounded-md">
          <img
            src="./images/footwears/tl-001.jpg"
            className="w-[170px] rounded-md"
            alt=""
          />
          <div>
            <h1 className="font-bold">Nike Airforce</h1>
            <div className="flex justify-between">
              <h1 className=" flex items-center text-blue-600 text-x font-bold">
                <TbCurrencyNaira size={30} />
                10,000.00
              </h1>
              <button className="  text-red-600 p-3 rounded-md text-xl ">
                {<BiLike size={25} /> && <BiSolidLike size={25} />}
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 border rounded-md">
          <img
            src="./images/footwears/tl-001.jpg"
            className="w-[170px] rounded-md"
            alt=""
          />
          <div>
            <h1 className="font-bold">Nike Airforce</h1>
            <div className="flex justify-between">
              <h1 className=" flex items-center text-blue-600 text-x font-bold">
                <TbCurrencyNaira size={30} />
                10,000.00
              </h1>
              <button className="  text-red-600 p-3 rounded-md text-xl ">
                {<BiLike size={25} /> && <BiSolidLike size={25} />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
