import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Feature from "../../components/Feature";
import Cta from "../../components/Cta";
import Cta2 from "../../components/Cta2";
import { useLocation } from "react-router-dom";
import { axiosPermissionsRoles } from "../../utils/axios_config";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCart(null);
      return;
    }
    try {
      axiosPermissionsRoles(token)
        .get("/api/cart")
        .then((res) => {
          // console.log(res.data);
          setCart(res.data)
        })
        .catch( err => {
          // console.log(err)
          console.log('You are have not Signed In!')
        })
    } catch (error) {
      console.log('You are have not Signed In!')
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowHeader(currentScrollPos <= 0 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className="test">
      {showHeader && <Header cart={cart} />}
      {/* main content */}
      <div>
        <div>
          <Feature />
        </div>
        <Cta />
        <Cta2 />
      </div>
      <Footer />
    </div>
  );
}
