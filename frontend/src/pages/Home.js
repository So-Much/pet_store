import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Feature from "../components/Feature";

export default function Home() {
  return (
    <div className="mclient_header">
      <Header />
      {/* main content */}
      <div>
        <div>
          <Feature />
        </div>
        <div className="w-full h-full p-10 flex">
          <div className="w-1/2">
            <img src="" alt="" />
          </div>
          <div className="w-1/2">
            <div className="text-xl">
              The Store which you need to choise for take care your pet.
            </div>
            <div className="text-sm text-opacity-50 text-slate-800">
              Ex reprehenderit voluptate ea anim ex magna consectetur
              reprehenderit. Velit adipisicing anim aliquip nisi Lorem cillum.
              Qui duis esse aute ullamco ut ullamco consectetur dolor duis
              veniam est. Consectetur amet ea aliqua magna sunt pariatur eu
              occaecat irure amet nisi amet ea voluptate. Minim mollit sunt
              culpa non sit veniam fugiat officia nostrud reprehenderit esse
              mollit ullamco culpa.
            </div>
          </div>
        </div>
        <div className="w-full h-full ">
            <Carousel />
          </div>
      </div>
      <Footer />
    </div>
  );
}
