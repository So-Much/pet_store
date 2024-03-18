import React, { useState } from "react";
import LoginImage from "../assets/Login_left.jpg";
import mailIcon from "../assets/mail-inbox-app.png";
import lockIcon from "../assets/lock.png";
import { Link } from "react-router-dom";

export default function Login() {
  const handleLogin = (e) => {
    
  }
  return (
    <div className="w-dvw min-h-dvh h-full bg-slate-200 flex items-center justify-center">
      {/* login layout */}
      <div
        className={`flex p-10 gap-5 rounded-xl w-1/2 bg-white animate__animated animate__lightSpeedInLeft`}
      >
        {/* main content */}
        <div className="w-1/2 h-[500px] mix-blend-multiply">
          <img
            src={LoginImage}
            alt="Login"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Login form */}
        <div className="w-1/2">
          <div className="font-bold text-5xl my-10 mx-2">Sign In</div>
          <div className="flex gap-3 flex-col">
            {/* username input */}
            <div className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <img
                src={mailIcon}
                alt="user"
                className="size-5 absolute top-[12px] opacity-70 left-3"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="w-full py-3 rounded-lg input_focus pl-10 text-sm peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />
              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Email
              </span>
            </div>
            {/* password input */}
            <div className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <img
                src={lockIcon}
                alt="user"
                className="size-5 absolute top-[12px] opacity-70 left-3"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full py-3 rounded-lg input_focus pl-10 text-sm peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              />
              <span class="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                Password
              </span>
            </div>
            <div className="pl-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm ml-3 text-slate-700">
                Remember me
              </label>
            </div>
            <div>
              <div className="text-sm text-right">
                Don't have an account?
                <Link
                  to={"/signup"}
                  className="underline ml-1 text-blue-500 hover:text-blue-600"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <Link
              to={"/"}
              onClick={handleLogin}
              className="w-full bg-slate-500 text-white py-2.5 rounded-lg mt-4 text-xl hover:bg-slate-600 hover:text-slate-200 text-center"
            >
              Sign In
            </Link>

            <Link to={"/"}>
              <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Continue with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
