export function ProductModel(props) {
	return (
		<section className="bg-white md:py-16 antialiased">
			<div className="max-w-screen-xl px-4 py-4 mx-auto 2xl:px-0 shadow-md">
				<div className="flex flex-row-reverse p-2">
					<span
						className="text-right font-bold text-2xl hover:text-red-600 hover:cursor-pointer"
						onClick={props.onCloseBtnClick}
					>
						X
					</span>
				</div>
				<div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 ">
					<div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
						<img
							className="w-full "
							src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
							alt=""
						/>
					</div>

					<div className="mt-6 sm:mt-8 lg:mt-0">
						<h1 className="text-xl font-semibold text-gray-900 sm:text-2xl ">
							{props.name}
						</h1>
						<div className="mt-4 sm:items-center sm:gap-4 sm:flex">
							<p className="text-2xl font-extrabold text-gray-900 sm:text-3xl ">
								{props.price}
							</p>
						</div>

						<div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
							<a
								href="#"
								title=""
								className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
								role="button"
							>
								<svg
									className="w-5 h-5 -ms-2 me-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
									/>
								</svg>
								Buy
							</a>

							<a
								href="#"
								title=""
								className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
								role="button"
							>
								<svg
									className="w-5 h-5 -ms-2 me-2"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
									/>
								</svg>
								Add to cart
							</a>
						</div>

						<hr className="my-6 md:my-8 border-gray-200" />

						<p className="mb-6 text-gray-500">{props.description}</p>

						{/* <p className="text-gray-500">
							Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
							Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
							Magic Keyboard or Magic Keyboard with Touch ID.
						</p> */}
					</div>
				</div>
			</div>
		</section>
	);
}