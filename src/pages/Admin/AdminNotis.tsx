import AdminHeading from "./AdminHeading";

export default function AdminNotification() {
  return (
    <div>
      <AdminHeading />
      <section className="p-2 grid grid-cols-1 sm:grid-cols-2">
        <h1 className="font-platypi text-xl my-2">Order 1</h1>
        <div className="p-2 border space-y-2">
          <div className="flex justify-between">
            <p>Name:</p>
            <span>Adeola lookman</span>
          </div>

          <table className="min-w-full border border-gray-300 text-center">
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Item</th>
              <th className="py-2 px-4 border-b">Qty</th>
              <th className="py-2 px-4 border-b">size</th>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b">Nike Airforce</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">45</td>
            </tr>
          </table>

          <div className="flex justify-between">
            <p>Date:</p>
            <span>12-8-2024</span>
          </div>
          <div className="flex justify-between">
            <p>Payment:</p>
            <span className="text-gray-400">Pending</span>
          </div>
          <div className="flex justify-between">
            <p>Delivery:</p>
            <span className="text-gray-400">Pending</span>
          </div>
          <hr className="border-2 border-black" />
          <div className="flex items-center justify-between space-y-4 p-2">
            <button className="bg-red-600 p-3 rounded-md text-white">
              Not Paid
            </button>
            <button className="bg-lime-500 p-3 rounded-md text-white">
              Paid
            </button>
            <button className="bg-blue-600 p-3 rounded-md text-white">
              Delivered
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
