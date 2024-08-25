import { IoChevronBack } from "react-icons/io5";
import UserprofileForm from "./UserprofileForm";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="p-3">
        <div className="flex items-center gap-8 mb-4">
          <button
            className="p-2 rounded-md bg-slate-100"
            onClick={() => navigate(-1)}
          >
            <IoChevronBack size={35} />
          </button>
          <h1 className="text-sky-800 text-2xl font-ubuntu font-semibold capitalize text-center ">
            Profile
          </h1>
        </div>
        <div className="p-2">
          <UserprofileForm />
        </div>
      </section>
    </div>
  );
}
