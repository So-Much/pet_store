import React from "react";
import petProduct from "../assets/petproduct.jpg";

export default function Cta2() {
	return (
		<div>
			<section className="bg-white dark:bg-gray-900">
				<div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
					<div className="mt-4 md:mt-0">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Your One-Stop Shop for Tails, Scales, and Feathers!
						</h2>
						<p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
							At our store, we're not just about selling products; we're about
							fostering the bond between pet owners and their beloved
							companions. From nutritious food to stylish accessories, we
							provide everything your furry friends need to live their best
							lives. Step into our welcoming space, where passion for pets meets
							top-notch service, ensuring a tail-wagging experience for all.
						</p>
						<a
							href="#"
							className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
						>
							Shop now
							<svg
								className="ml-2 -mr-1 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<img
						className="w-full hidden dark:block"
						src={petProduct}
						alt="dashboard image"
					/>
				</div>
			</section>
		</div>
	);
}
