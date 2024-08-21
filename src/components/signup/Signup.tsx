import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Signup() {
  const [hidePassword, setHidePassword] = useState(false);
  const [confrPassword, setConfrPassword] = useState(false);
  const regPassword = () => {
    setHidePassword((i) => !i);
    const regPasswordInput = document.getElementById(
      "hide"
    ) as HTMLInputElement;
    if (regPasswordInput) {
      regPasswordInput.type =
        regPasswordInput.type === "password" ? "text" : "password";
    }
  };
  const confrRegPassword = () => {
    setConfrPassword((u) => !u);
    const confrRegPasswordInput = document.getElementById(
      "hidden"
    ) as HTMLInputElement;
    if (confrRegPasswordInput) {
      confrRegPasswordInput.type =
        confrRegPasswordInput.type === "password" ? "text" : "password";
    }
  };
  const signupForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" ">
      <div className="bg-black text-white p-3 lg:p-1">
        <a href="/" className="font-ubuntu text-2xl sm:text-3xl sm:pl-3 lg:2xl">
          FusionMart
        </a>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" lg:flex lg:justify-center lg:items-center ">
          <form
            onClick={signupForm}
            className="bg-white flex  flex-col items-center justify-center  p-5 sm:w-[550px] sm:py-[3rem]  lg:w-[55%] "
          >
            <div className="py-">
              <h1 className="text-left text-3xl font-ubuntu font-bold">
                Register
              </h1>
              <p className="text-center text-[15px] py-2 font-ubuntu tracking-wide sm:text-2xl sm:py-4 lg:text-2xl lg:py-0">
                Welcome to FusionMart, please fill the form below
              </p>
            </div>
            <div className="sm:py-5  sm:w-full sm:px-5 sm:space-y-2 lg:p-2">
              <label className="text-xl sm:text-2xl font-semibold">
                Full Name:
              </label>
              <br />
              <input
                className="border-b-2 w-full p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-xl sm:mb-2"
                type="text"
                placeholder="Enter Full Name"
                required
              />
              <br />
              <br />
              <label className="text-xl sm:text-2xl font-semibold">
                Email:
              </label>
              <br />
              <input
                className="border-b-2 w-full p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-xl"
                type="email"
                placeholder="Enter Email"
                required
              />
              <br />
              <br />
              <div className="relative">
                <label className="text-xl sm:text-2xl font-semibold ">
                  Password:
                </label>
                <input
                  className="border-b-2 w-full p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-xl"
                  id="hide"
                  type="password"
                  placeholder="Enter Password"
                  required
                />
                <button
                  className="text-3xl absolute right-3 bottom-1"
                  onClick={regPassword}
                >
                  {hidePassword ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </button>
              </div>
              <br />
              <br />

              <div className="relative">
                <label className="text-xl sm:text-2xl font-semibold ">
                  Confirm Password:
                </label>
                <input
                  className="border-b-2 w-full p-2 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-xl"
                  id="hidden"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  className="text-3xl absolute right-3 bottom-1"
                  onClick={confrRegPassword}
                >
                  {confrPassword ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="p-2 rounded-full my-8 font-robotomono w-full text-xl bg-blue-600  text-white sm:text-2xl hover:opacity-70  lg:my-1"
            >
              Sign up
            </button>

            <div className="flex text-xl  font-medium gap-2 items-center py-2 sm:text-2xl lg:py-2">
              <h2>Already have an account? </h2>
              <Link
                to="/login"
                className=" text-red-700 font-bold text-xl sm:text-2xl"
              >
                Log in
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-8 w-full ">
              <p className="text-xl text-center text-gray-400">
                or sign up with
              </p>
              <button className="flex items-center justify-center  w-full p-4 gap-3 rounded-full bg-slate-200">
                <FcGoogle size={30} />
                <p className="text-xl text-gray-500">Continue with Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
