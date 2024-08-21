import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage/Homepage";
import PageNotFound from "./pages/PageNotFound";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import User from "./components/Userprofile/User";
// import CartItems from "./pages/Cartpage/CartItems";
// import Trade from "./pages/trade/Trade";
import Admin from "./pages/Admin/Admin";
import UserSettings from "./components/Userprofile/UserSettings";
import Favourite from "./components/liked/Favourite";
import History from "./components/recent/History";
// import Orders from "./components/order/Orders";
import Payment from "./pages/Checkoutpage/Payment";
import AdminUpload from "./pages/Admin/AdminUpload";
import Loading from "./components/loader/Loading";
import AdminNotification from "./pages/Admin/AdminNotis";
// import ProductDetails from "./components/productdetails/ProductDetails";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const CartItems = lazy(() => import("./pages/Cartpage/CartItems"));
const Trade = lazy(() => import("./pages/trade/Trade"));
const Orders = lazy(() => import("./components/order/Orders"));
const ProductDetails = lazy(
  () => import("./components/productdetails/ProductDetails")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="adminupload" element={<AdminUpload />} />
          <Route path="adminnotification" element={<AdminNotification />} />
          <Route path="trade" element={<Trade />} />
          <Route path="user" element={<User />} />
          <Route path="productinfo" element={<ProductDetails />} />
          <Route path="usersettings" element={<UserSettings />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="history" element={<History />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment" element={<Payment />} />
          <Route path="cartitems" element={<CartItems />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
