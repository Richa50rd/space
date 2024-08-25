export default function AdminLogin() {
  return (
    <div className=" h-screen lg:h-full">
      <div>
        <h1 className="text-2xl text-center my-5 font-ubuntu text-red-600">
          Admin Login
        </h1>
      </div>
      <div className="p-3">
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

              <div className="">
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
              </div>
            </div>
            <button
              type="submit"
              className="p-2 rounded-full my-4 font-robotomono w-full text-2xl bg-blue-600  text-white  hover:opacity-70  lg:my-1"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
