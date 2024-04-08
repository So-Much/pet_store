import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound_404 from "./exceptions/PageNotFound_404";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import Home from "./pages/client/Home";
import Shop from "./pages/client/Shop";
import Scan from "./pages/client/Scan";
import Services from "./pages/client/Services";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/admin/Dashboard";
import Inbox from "./pages/admin/Inbox";
import User from "./pages/admin/User";
import Product from "./pages/admin/Product";
import ProductDetail from "./pages/admin/ProductDetail";
import axios from "./utils/axios_config";
// import Schedule from "./pages/admin/Schedule";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  // #fff3c7
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");

  // check token is valid
  useEffect(() => {
    axios.get(
      "/api/user",
      {
        data: token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }, [token]);
  return (
    <div className="max-w-[1440px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="admin">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="user" element={<User />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:product_id" element={<ProductDetail />} />
        </Route>
        {/* <Route path="/admin/schedule" element={<Schedule />} /> */}

        <Route path="*" element={<PageNotFound_404 />} />
      </Routes>
      {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
    </div>
  );
}

export default App;
