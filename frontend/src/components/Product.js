import CartIcon from "./CartIcon";

export function Product(props) {
	// function displayModel(props) {}4
	return (
		<div>
			<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
				<div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 cursor-pointer">
					<img
						src={props.img}
						class="h-full w-full object-cover"
						onClick={props.onProductClick}
					/>
				</div>
				<div class="p-6">
					<div
						class="mb-2 flex items-center justify-between"
						onClick={props.onProductClick}
					>
						<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased cursor-pointer">
							{props.name}
						</p>
						<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"></p>
					</div>
					<p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
						{props.price}
					</p>
				</div>
				<div class="p-6 pt-0">
					<CartIcon />
				</div>
			</div>
		</div>
	);
}
