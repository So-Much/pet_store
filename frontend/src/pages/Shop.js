import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import Feature from "../components/Feature";
import { Link } from "react-router-dom";
import BreadcrumbImageIcon from "../components/BreadcrumbImageIcon";
import DividedLine from "../components/DividedLine";
import DropdownFilter from "../components/DropdownFilter";

export default function Shop() {
  const categories = ["Foods", "Pet Toys", "Vacxin"];
  return (
    <div className="mclient_header">
      <Header />
      <div className="container mx-auto">
        <div className="relative">
          <img
            src="https://i.pinimg.com/564x/e7/98/78/e79878481f650ad6f6e3ba9737caa45d.jpg"
            alt="shop"
            className="w-full h-[400px] object-cover"
          />
        </div>
        {/* main content shop */}
        <div className="px-12 py-5">
          <div className="flex ">
            <div className="w-2/5">
              <div className="font-semibold text-3xl leading-normal">
                Our Catogories
              </div>
              <DividedLine size={{ width: 40, height: 4 }} />
              <div className="text-sm text-gray-500">
                Occaecat eiusmod enim ex veniam aute culpa veniam id ullamco
                incididunt. Officia ullamco minim deserunt tempor minim deserunt
                sint eu nulla dolor qui excepteur. Eiusmod voluptate amet
                ullamco aute labore adipisicing cillum magna proident aliqua.
                Sit est et et mollit dolor occaecat qui.
              </div>
              <div className="my-5">
                <Link
                  to={"/readmore"}
                  className="text-white bg-[#ffd24a] rounded-full px-5 py-3 hover:bg-[#ffbe20] hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="w-3/5 flex items-center justify-center">
              <BreadcrumbImageIcon />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center flex-col">
              <div className="text-center font-semibold text-xl ">
                Trending Product
              </div>
              <DividedLine size={{ width: 60, height: 4 }} />
              {/* filter */}
              <div>
                <DropdownFilter />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main content
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/3">
            <div className="p-10">
              <div className="font-bold text-xl">Categories</div>
              <ul className="">
                {categories.map((category) => (
                  <li className="text-md">
                    <input type="checkbox" name="categories" className="mr-2" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-2/3"></div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
