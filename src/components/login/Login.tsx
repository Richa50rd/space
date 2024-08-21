import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginPassword, setLoginPassword] = useState(false);
  const navigate = useNavigate();
  const loginPasswordVisibility = () => {
    setLoginPassword((i) => !i);
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
    }
  };
  return (
    <div className=" h-screen lg:h-full">
      <div className="bg-black text-white p-3 lg:p-1">
        <a href="/" className="font-ubuntu text-xl sm:text-3xl sm:pl-3 lg:2xl">
          FusionMart
        </a>
      </div>
      <div className="p-3">
        <div className="py-10">
          <h1 className="text-3xl font-ubuntu font-bold">Login</h1>
          <p className="font-playfair text-xl text-gray-400">
            welcome back to FusionMart
          </p>
        </div>
        <div className=" lg:flex   p-2 lg:justify-center lg:items-center ">
          <form className="bg-white    flex space-y-6 flex-col items-center justify-center sm:w-[550px] sm:py-[3rem]  lg:w-[55%] ">
            <div className="w-full space-y-8 sm:py-5  sm:w-full sm:px-5 sm:space-y-2 lg:p-2">
              <div>
                <label className="text-2xl sm:text-2xl font-semibold">
                  Email:
                </label>

                <input
                  className="border-b-2 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-xl"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-bold text-l my-2 float-right"
              >
                Forgort password?
              </a>
              <div className="relative ">
                <label className="text-2xl sm:text-2xl font-semibold ">
                  Password:
                </label>
                <input
                  className="border-b-2 w-full p-3 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-xl"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  required
                />
                <button
                  className="text-3xl absolute right-3 bottom-3"
                  onClick={loginPasswordVisibility}
                >
                  {loginPassword ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 ">
                <input type="checkbox" name="" id="" />
                <p className="text-l">Keep me signed in</p>
              </div>
            </div>
            <button
              type="submit"
              className="p-2 rounded-full my-4 font-robotomono w-full text-2xl bg-blue-600  text-white  hover:opacity-70  lg:my-1"
            >
              Login
            </button>
            <div className="flex flex-col items-center space-y-8 w-full ">
              <p className="text-xl text-center text-gray-400">
                or sign in with
              </p>
              <button className="flex items-center justify-center  w-full p-4 gap-3 rounded-full bg-slate-200">
                <FcGoogle size={30} />
                <p className="text-xl text-gray-500">Continue with Google</p>
              </button>
              <button
                className="text-xl text-blue-500 font-bold"
                onClick={() => navigate("/signup")}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
