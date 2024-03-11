import React, { useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import lockIcon from "../assets/lock.png";
import RegisterImage from "../assets/Register_left.jpg";

export default function Register() {
    const animates = ['animate__lightSpeedInLeft', 'animate__lightSpeedOutRight']
    const [animate, setAnimate] = useState(animates[0])
    const handleHandoutLayout = () => {
      setAnimate((preAnimate) => {
        return preAnimate === animates[0] ? animates[1] : animates[0]
      })
    }
  return (
    <div className="w-full h-dvh bg-slate-200 flex items-center justify-center">
      {/* login layout */}
      <div
        className={`flex p-10 gap-5 rounded-xl w-1/2 bg-white animate__animated ${animate}`}
      >
        {/* main content */}
        <div className="w-1/2 h-[500px] mix-blend-multiply">
          <img
            src={RegisterImage}
            alt="Login"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Login form */}
        <div className="w-1/2">
          <div className="font-bold text-5xl my-10 mx-2">Sign Up</div>
          <div className="flex gap-3 flex-col">
            {/* username input */}
            <div className="relative">
              <img
                src={userIcon}
                alt="user"
                className="size-5 absolute top-[12px] opacity-70 left-3"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-solid py-3 rounded-lg input_focus pl-10 text-sm"
              />
            </div>
            {/* password input */}
            <div className="relative">
              <img
                src={lockIcon}
                alt="user"
                className="size-5 absolute top-[12px] opacity-70 left-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-solid py-3 rounded-lg input_focus pl-10 text-sm"
              />
            </div>
            <div className="relative">
              <img
                src={lockIcon}
                alt="user"
                className="size-5 absolute top-[12px] opacity-70 left-3"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-solid py-3 rounded-lg input_focus pl-10 text-sm"
              />
            </div>
            <div>
              <div className="text-sm text-right">
                Have an account?{" "}
                <Link to={"/signin"} className="underline">
                  Sign In
                </Link>
              </div>
            </div>
            <Link
              to={"/signin"}
              onClick={handleHandoutLayout}
              className="w-full bg-slate-500 mt-4 text-white py-3 rounded-lg text-xl hover:bg-slate-600 hover:text-slate-200 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
