import { useState } from "react";

export default function Checkout() {
  const BankTransfer = () => (
    <div>
      <h1>Bank Transfer</h1>
    </div>
  );
  const Crypto = () => (
    <div>
      <h1>Bank Transfer</h1>
    </div>
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Bank Transfer");
  return (
    <div>
      <h1>checkout page</h1>
      <div>
        <button onClick={() => setSelectedPaymentMethod("Bank Transfer")}>
          Bank Transfer
        </button>
        <button onClick={() => setSelectedPaymentMethod("Crypto")}>
          Crypto
        </button>
      </div>
      <div>
        {selectedPaymentMethod === "Bank Transfer" && <BankTransfer />}
        {selectedPaymentMethod === "Crypto" && <Crypto />}
      </div>
    </div>
  );
}
