import React from "react";
import step4 from "./../assets/boy.png";
import step3 from "./../assets/shopping-bag.png";
import step2 from "./../assets/idea.png";
import step1 from "./../assets/qr-code-scan.png";
import { Link } from "react-router-dom";

export default function BreadcrumbImageIcon() {
  return (
    <div className="relative">
      <div className="flex gap-8 w-full h-full">
        <div className="flex justify-center items-center flex-col bg-white">
          <Link to="/scan">
            <img src={step1} alt="" className="size-10" />
          </Link>
          <div>Scan your pet</div>
        </div>
        <div className="flex justify-center items-center flex-col bg-white">
          <Link to="/scan">
            <img src={step2} alt="" className="size-10" />
          </Link>
          <div>Knowleged</div>
        </div>
        <div className="flex justify-center items-center flex-col bg-white">
          <Link to="/shop">
            <img src={step3} alt="" className="size-10" />
          </Link>
          <div>Get their need</div>
        </div>
        <div className="flex justify-center items-center flex-col bg-white">
          <Link to="/cart">
            <img src={step4} alt="" className="size-10" />
          </Link>
          <div>Happiness</div>
        </div>
      </div>
      <div className="absolute top-1/3 -left-5 -right-5 h-[2px] bg-black rounded-full -z-10"></div>
    </div>
  );
}
