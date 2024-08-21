import { useNavigate } from "react-router-dom";

export default function Shop() {
  const navigate = useNavigate();
  return (
    <section className="h-full bg-gradient-to-r from-[#83B5D1] via-[#E1E6E1] to-[#E0CBA8]">
      <div className="px-5 py-2 ">
        <div></div>
        <p className="font-playfair text-gray-900 text-sm bg-white p-3 rounded-md opacity-90 shadow-2xl sm:text-l">
          Enjoy the convenience of shopping online with FusionMart, fast
          delivery, and flexible payment options, we accept stables "USDT/USDC"
          as means of payment. You can also sell your crypto to us and get fiat.
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center mb-3 p-5">
          <h1 className="uppercase text-xl text-center font-josefinsans font-bold tracking-widest lg:text-2xl">
            Footwears & Slides
          </h1>
          <div className="grid grid-cols-2 px-5 py-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:justify-center">
            <img
              src="./images/footwears/0z1.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/dg-001.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/hrd.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/lv-001.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/lv-002.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/lv-003.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/lv-004.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/lv-005.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/nk-001.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/palms.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
            <img
              src="./images/footwears/tl-001.jpg"
              className="w-[200px] rounded-md object-contain"
              alt=""
            />
            <img
              src="./images/footwears/tl-002.jpg"
              className="w-[200px] rounded-md"
              alt=""
            />
          </div>

          <button
            className="font-robotomono text-2xl border-2 border-gray-500 p-2 rounded-md w-full shadow-2xl sm:w-[60%] lg:w-[50%] hover:underline "
            onClick={() => navigate("/login")}
          >
            Shop Now...
          </button>
        </div>
        <div className="flex flex-col items-center  p-5">
          <h1 className="uppercase text-xl text-center font-josefinsans font-bold tracking-widest lg:text-3xl">
            Crypto assets
          </h1>
          <p className="text-l text-center text-gray-600 font-platypi lg:text-xl">
            fast and secure transaction
          </p>
          <div className="grid grid-cols-2 px-5 py-2 gap-2 justify-center lg:grid-cols-4 lg:gap-4">
            <div className="grid grid-cols-2 gap-2 rounded-md ">
              <img
                src="./images/finance/crypto/btc.png"
                className="w-[100px] rounded-full"
                alt=""
              />
              <img
                src="./images/finance/crypto/sol.jfif"
                className="w-[100px] rounded-md"
                alt=""
              />
              <img
                src="./images/finance/crypto/usdc.png"
                className="w-[100px] rounded-full"
                alt=""
              />
              <img
                src="./images/finance/crypto/usdt.png"
                className="w-[100px] rounded-md"
                alt=""
              />
            </div>
            <img
              src="./images/finance/trx-img.png"
              className="w-[200px]"
              alt=""
            />
            <img
              src="./images/finance/f4.webp"
              className="w-[200px] hidden sm:grid"
              alt=""
            />
            <img
              src="./images/finance/hero-img.png"
              className="w-[200px] hidden sm:grid"
              alt=""
            />
          </div>
          <button
            className="font-robotomono text-2xl border-2 border-gray-500 p-2 rounded-md w-full shadow-2xl sm:w-[60%] lg:w-[40%] hover:underline"
            onClick={() => navigate("/login")}
          >
            Trade with us...
          </button>
        </div>
      </div>
    </section>
  );
}
