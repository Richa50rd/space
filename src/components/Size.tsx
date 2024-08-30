import { useState } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

import { useCart } from "./context/UseCart";

interface SizeAdjusterProps {
  id: string;
  size?: number;
}

const ShoeSize: React.FC<SizeAdjusterProps> = ({ id, size = 40 }) => {
  const { increaseSize, decreaseSize } = useCart();
  const [shSize, setShSize] = useState(size);
  const incSize = () => {
    setShSize((prevItems) => prevItems + 1);
    increaseSize(id, 40);
  };
  const decSize = () => {
    setShSize((prevItems) => prevItems - 1);
    decreaseSize(id, 40);
  };
  return (
    <div className="flex items-center ">
      <button
        onClick={decSize}
        disabled={shSize === 40}
        className="border p-1 bg-gray-100"
      >
        <RiSubtractFill />
      </button>
      <p className="">{shSize}</p>
      <button onClick={incSize} className="border p-1 bg-gray-100">
        <MdOutlineAdd />
      </button>
    </div>
  );
};
export default ShoeSize;
