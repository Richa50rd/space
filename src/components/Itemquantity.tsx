import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

import { useCart } from "./context/UseCart";

interface QuantityAdjusterProps {
  id: string;
  initialQuantity?: number;
}

const Itemquantity: React.FC<QuantityAdjusterProps> = ({
  id,
  initialQuantity = 1,
}) => {
  const { increaseItmQty, decreaseItmQty } = useCart();
  const [itmQuantity, setItemQuantity] = useState(initialQuantity);

  const decItemQuantity = () => {
    setItemQuantity((prev) => prev - 1);
    decreaseItmQty(id, 1);
  };
  const incItemQuantity = () => {
    setItemQuantity((prev) => prev + 1);
    increaseItmQty(id, 1);
  };
  return (
    <div className="flex items-center ">
      <button
        onClick={decItemQuantity}
        disabled={itmQuantity === 1}
        className="border p-1 bg-gray-100"
      >
        <RiSubtractFill />
      </button>
      <p className="">{itmQuantity}</p>
      <button onClick={incItemQuantity} className="border p-1 bg-gray-100">
        <MdOutlineAdd />
      </button>
    </div>
  );
};
export default Itemquantity;
