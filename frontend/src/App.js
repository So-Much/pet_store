import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound_404 from "./exceptions/PageNotFound_404";
import { useState } from "react";
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
// import Schedule from "./pages/admin/Schedule";


function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  // #fff3c7
  return (
    <div className="max-w-[1440px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/inbox" element={<Inbox />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/product" element={<Product />} />
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
