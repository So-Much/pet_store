export function Product(props) {
	function displayModel(props) {}
	return (
		<div>
			<div className="mx-auto px-5 flex">
				<div
					className="h-max max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md"
					onClick={props.onProductClick}
				>
					<img
						className="w-full rounded-lg object-cover object-center"
						src={props.img}
						alt="product"
					/>
					<p className="my-4 pl-4 font-bold text-gray-500 truncate text-base">
						{props.name}
					</p>
					<p className="mb-4 ml-4 text-lg font-semibold text-gray-800">
						{props.price}
					</p>
				</div>
			</div>
		</div>
	);
}
