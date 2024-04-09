import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Cart from "./Cart";
import Authenticate from "./Authenticate";

export default function Header({
	cart = {}
}) {

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
					{!cart ? <Authenticate /> : <Cart />}
					<div
						className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 "
						id="navbar-sticky"
					>
						<ul className="flex flex-col p-4 md:p-0 font-medium border-gray-100 rounded-lg bg-white dark:bg-gray-900 space-x-8 rtl:space-x-reverse md:flex-row mt-0 border-0 ">
							<li>
								<Link
									to={"/"}
									className={
										"block py-2 px-3 rounded hover:text-[#ffe588] text-lg p-0 text-white"
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
										"block py-2 px-3 rounded hover:text-[#ffe588] text-lg p-0 text-white"
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
