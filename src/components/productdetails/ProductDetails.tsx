import { IoMdArrowBack } from "react-icons/io";
import Details from "./Details";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navigate = useNavigate();

  return (
    <div className="p-2">
      <div className="flex items-center gap-4 text-center">
        <button className="p-2" onClick={() => navigate(-1)}>
          <IoMdArrowBack size={35} />
        </button>
        <h1 className="text-sky-800 text-2xl font-ubuntu font-semibold capitalize">
          Details
        </h1>
      </div>
      <Details />
    </div>
  );
}
