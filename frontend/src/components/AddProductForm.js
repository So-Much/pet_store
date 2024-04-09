import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function AddProductForm(props) {
	return (
		<div className="bg-black">
			<div className="bg-white p-8 rounded shadow-md max-w-5xl h-fit w-full mx-auto absolute inset-6 z-50">
				<div className="flex flex-row-reverse cursor-pointer">
					<FontAwesomeIcon icon={faX} onClick={props.closeModel} />
				</div>
				<h2 className="text-2xl font-semibold mb-4 text-center">
					Add new product
				</h2>

				<form>
					<div className="grid grid-cols-2 gap-4">
						<div className="col-span-2">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Product name
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
						<div className="col-span-1">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Price
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
						<div className="col-span-1">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Quantity
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
						<div className="col-span-1">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Brand
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
						<div className="col-span-1">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Unit
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
						<div className="col-span-2">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Category
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
						<div className="col-span-2">
							<label
								for="firstName"
								className="block text-sm font-medium text-gray-700"
							>
								Description
							</label>
							<input
								type="text"
								id="firstName"
								name="firstName"
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>
					</div>

					<div className="mt-6 flex justify-center">
						<button
							class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							data-ripple-light="true"
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
