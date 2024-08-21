import { TbCurrencyNaira } from "react-icons/tb";
import DashboardHeading from "../Dashboard/DashboardHeading";

import Transfer from "./Transfer";
import { useState } from "react";
import Crypto from "./Crypto";

// interface ContainerProps {
//   id: string;
//   isOpen: boolean;
//   onToggle: (id: string) => void;
//   children: React.ReactNode;
// }

export default function Payment() {
  const [bankTransfer, setBankTransfer] = useState(false);
  const toggleBankTransfer = () => {
    setBankTransfer((i) => !i);
  };
  const [cryptoTransfer, setCryptoTransfer] = useState(false);
  const toggleCryptoTransfer = () => {
    setCryptoTransfer((c) => !c);
  };
  return (
    <div>
      <DashboardHeading />
      <section className="p-3">
        <h1 className="text-xl font-bold font-ubuntu ">Shipping Details</h1>
        <div className="border rounded-lg shadow-md text-xl p-3">
          <div className="flex justify-between">
            <label>Name:</label>
            <p className="text-gray-400">adeola lukman</p>
          </div>
          <div className="flex justify-between">
            <label>phone:</label>
            <p className="text-gray-400">+2347035</p>
          </div>
          <div className="flex justify-between">
            <label>Address:</label>
            <p className="text-gray-400">3 oreon coker</p>
          </div>
        </div>
      </section>
      <section className="p-3">
        <h1 className="text-xl font-bold font-ubuntu ">Payment Details</h1>
        <div className="border rounded-lg shadow-md text-xl p-3">
          <div className="flex justify-between">
            <p>Items(3)</p>
            <p className="font-bold flex items-center">
              <TbCurrencyNaira size={30} />
              10,000.00
            </p>
          </div>
          <div className="flex justify-between  ">
            <p>Delivery</p>
            <p className="font-bold flex items-center">
              <TbCurrencyNaira size={30} />
              5,000.00
            </p>
          </div>
          <div className="flex justify-between">
            <h2>Total price</h2>
            <p className="font-bold flex items-center ">
              <TbCurrencyNaira size={30} />
              15,000.00
            </p>
          </div>
        </div>
      </section>
      <section className="p-3">
        <div className="border rounded-lg shadow-md text-l text-gray-500 p-3">
          <p>
            send total amount of 100k naira to account below or send $400 in
            usdt to any of the crypto wallet below
          </p>
        </div>
      </section>
      <section className="p-3 space-y-3">
        <div className="rounded-lg border p-2 ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name=""
                id=""
                onClick={toggleBankTransfer}
                className="w-5 h-5"
              />
              <h1>Bank Transfer</h1>
            </div>
          </div>
          {bankTransfer && <Transfer />}
        </div>
        <div className="rounded-lg border p-2">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name=""
                id=""
                onClick={toggleCryptoTransfer}
                className="w-5 h-5"
              />
              <h1>Crypto Stables USDT</h1>
            </div>
          </div>
          {cryptoTransfer && <Crypto />}
        </div>
      </section>
    </div>
  );
}
