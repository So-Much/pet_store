import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Scan from "./pages/Scan";
import PageNotFound_404 from "./exceptions/PageNotFound_404";

function App() {
  return (
    <div className="max-w-[1440px]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound_404/>} />
      </Routes>
    </div>
  );
}

export default App;
