import { TbCurrencyNaira } from "react-icons/tb";
import DashboardHeading from "../../pages/Dashboard/DashboardHeading";

export default function Orders() {
  return (
    <div>
      <DashboardHeading />
      <section className="p-3">
        <div className="border p-2 rounded-md">
          <h1 className="font-bold text-xl">order id</h1>
          <p>order: jan 31 2024</p>
          <hr />
          <div className="space-y-2">
            <p className="flex items-center justify-between">
              order status
              <span>processing</span>
            </p>
            <p className="flex items-center justify-between">
              payment status
              <span>paid</span>
            </p>
            <p className="flex items-center justify-between">
              Delivery status
              <span>processing</span>
            </p>
            <p className="flex items-center justify-between">
              Items
              <span>2</span>
            </p>
            <p className="flex items-center justify-between">
              price
              <span className="flex items-center text-blue-600 font-bold">
                <TbCurrencyNaira size={20} />
                200,000
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
