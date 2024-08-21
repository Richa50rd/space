import { AiOutlineLineChart } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { PiPackageThin } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";

export default function AdminDashboard() {
  return (
    <section className="p-4">
      <div className="bg-[#C4D6B0] px-5 rounded-xl  ">
        <h1 className="text-3xl font-robotomono font-bold pt-5 lg:text-center">
          Today's Sales
        </h1>
        <p className="text-gray-500 text-2xl mb-4 lg:text-center">
          Sales Summary
        </p>
        <div className="grid grid-cols-1 space-y-4 lg:grid-cols-3 lg:gap-4 lg:p-2 lg:items-center">
          <div className="bg-slate-300 rounded-xl p-4 text-2xl space-y-3 font-semibold">
            <AiOutlineLineChart size={45} />
            <h1 className="flex items-center text-3xl font-bold">
              <TbCurrencyNaira size={30} />
              2000.00
            </h1>
            <h3 className="">Total Sales</h3>
            <p c>10% from yesterday</p>
          </div>
          <div className="bg-slate-300 rounded-xl p-4 text-2xl space-y-3 font-semibold">
            <MdOutlineCandlestickChart size={45} />
            <h1 className=" text-3xl font-bold">20</h1>
            <h3 className="">Total Crypto Trades</h3>
            <p>5% from yesterday</p>
          </div>
          <div className="bg-slate-300 rounded-xl p-4 text-2xl space-y-3 font-semibold">
            <CiFaceSmile size={45} />
            <h1 className=" text-3xl font-bold">20</h1>
            <h3 className="">Total Orders</h3>
            <p>5% from yesterday</p>
          </div>
          <div className="bg-slate-300 rounded-xl p-4 text-2xl space-y-3 font-semibold">
            <PiPackageThin size={45} />
            <h1 className="9 text-3xl font-bold">9</h1>
            <h3 className="">Product sold</h3>
            <p>5% from yesterday</p>
          </div>
          <div className="bg-slate-300 rounded-xl p-4 text-2xl space-y-3 font-semibold">
            <FiUserPlus size={45} />
            <h1 className="9 text-3xl font-bold">12</h1>
            <h3 className="">New Customer</h3>
            <p>2% from yesterday</p>
          </div>
        </div>
      </div>
      <div className="bg-[#C4D6B0] px-5 rounded-xl py-4 my-4 space-y-4">
        <div className="text-center text-3xl font-ubuntu font-bold">
          <h1>Earnings</h1>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <table className="bg-slate-300 rounded-md p-4  space-y-3 text-xl ">
            <tr className="space-x-4 space-y-2">
              <th className="px-4 py-2">
                <p>Sales for the week</p>
              </th>
              <th>
                <p>Trades for the week</p>
              </th>
            </tr>
            <tr>
              <td>
                <h1 className="flex items-center text-2xl">
                  <TbCurrencyNaira size={35} />
                  10,000.00
                </h1>
              </td>
              <td>
                <h1 className="flex items-center text-2xl">
                  <TbCurrencyNaira size={35} />
                  10,000.00
                </h1>
              </td>
            </tr>
          </table>
          <table className="bg-slate-300 rounded-md p-4  space-y-3 text-xl ">
            <tr>
              <th>
                <p>Sales for the Month</p>
              </th>
              <th>
                <p>Trade for the Month</p>
              </th>
            </tr>
            <tr>
              <td>
                <h1 className="flex items-center text-2xl">
                  <TbCurrencyNaira size={35} />
                  10,000.00
                </h1>
              </td>
              <td>
                <h1 className="flex items-center text-2xl">
                  <TbCurrencyNaira size={35} />
                  10,000.00
                </h1>
              </td>
            </tr>
          </table>
          <table className="bg-slate-300 rounded-md p-4  space-y-3 text-xl ">
            <tr>
              <th>
                <p>Sales for the Year</p>
              </th>
              <th>
                <p>Trade for the Year</p>
              </th>
            </tr>
            <tr>
              <td>
                <h1 className="flex items-center text-2xl">
                  <TbCurrencyNaira size={35} />
                  10,000.00
                </h1>
              </td>
              <td>
                <h1 className="flex items-center text-2xl">
                  <TbCurrencyNaira size={35} />
                  10,000.00
                </h1>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-[#E2FDFF]">
        <div className="flex flex-col items-center p-5">
          <h1 className="font-robotomono text-xl font-bold my-3">Customers</h1>
          <input
            type="text"
            placeholder="Search..."
            className="border-2 p-2 w-full rounded-md bg-slate-200 focus:outline-none placeholder:text-xl"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse min-w-full ">
            <tr className="space-x-4 space-y-2">
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Delivery Address</th>
            </tr>
            <tr className="space-x-4 space-y-2">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">user</td>
              <td className="px-4 py-2">user@gmail.com</td>
              <td className="px-4 py-2">+2345023568</td>
              <td className="px-4 py-2">23 adeola okokomaiko</td>
            </tr>
            <tr className="space-x-4 space-y-2">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">user</td>
              <td className="px-4 py-2">user@gmail.com</td>
              <td className="px-4 py-2">+2345023568</td>
              <td className="px-4 py-2">23 adeola okokomaiko</td>
            </tr>
            <tr className="space-x-4 space-y-2">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-2">user</td>
              <td className="px-4 py-2">user@gmail.com</td>
              <td className="px-4 py-2">+2345023568</td>
              <td className="px-4 py-2">23 adeola okokomaiko</td>
            </tr>
          </table>
          <div className="flex justify-around items-center">
            <button className="border rounded-lg p-4">
              <GrLinkPrevious size={30} />
            </button>
            <button className="border rounded-lg p-4">
              <GrLinkNext size={30} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
