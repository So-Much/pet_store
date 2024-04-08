import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function Header() {
	return (
		// make sure margin top is 68px
		<div className="header z-50">
			<nav className="fixed w-full z-20 top-0 start-0">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-white dark:bg-gray-900 shadow-md">
					<Link
						to={"/"}
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<img src={Logo} className="size-8 rounded-md" alt="PetStore Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
							PetStore
						</span>
					</Link>
					<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<div className="flex flex-row gap-2">
							<Link
								to={"/signin"}
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								Sign In
							</Link>
							<Link
								to={"/signup"}
								className="text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
							>
								Sign Up
							</Link>
						</div>
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							aria-controls="navbar-sticky"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 font-medium border-gray-100 rounded-lg bg-white dark:bg-gray-900 space-x-8 rtl:space-x-reverse md:flex-row mt-0 border-0 ">
							<li>
								<Link
									to={"/"}
									className={
										"block py-2 px-3 rounded text-black hover:text-[#ffe588] text-lg p-0 text-white"
									}
									aria-current="page"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={"/shop"}
									className={
										"block py-2 px-3 rounded text-black hover:text-[#ffe588] text-lg p-0 text-white"
									}
								>
									Shop
								</Link>
							</li>
							<li>
								<Link
									to={"/scan"}
									className={
										"block py-2 px-3 rounded text-black hover:text-[#ffe588] text-lg p-0 text-white"
									}
								>
									Scan
								</Link>
							</li>
							<li>
								<Link
									to={"/services"}
									className={
										"block py-2 px-3 rounded text-black hover:text-[#ffe588] text-lg p-0 text-white"
									}
								>
									Services
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
