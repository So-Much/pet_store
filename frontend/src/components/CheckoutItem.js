import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function CheckoutItem(props) {
	const [quantity, setQuantity] = useState(parseInt(props.quantity));
	console.log("quantity is: ", quantity);
	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};
	const decreaseQuantity = () => {
		if (quantity > 0) setQuantity(quantity - 1);
	};
	return (
		<tr class="border-b border-gray-700">
			<td class="px-4 py-3" style={{ width: "150px" }}>
				<img src={props.img} />
			</td>

			<td scope="row" class="px-4 py-3 font-medium text-gray-900 text-center">
				Thức ăn cho chó con cỡ nhỏ ROYAL CANIN Mini Puppy
			</td>
			<td class="px-4 py-3 text-center">
				<div className="grid grid-cols-3 justify-items-center">
					<FontAwesomeIcon
						className="cursor-pointer"
						icon={faMinus}
						onClick={decreaseQuantity}
					/>
					<p className="text-center">{quantity}</p>
					<FontAwesomeIcon
						className="cursor-pointer"
						icon={faPlus}
						onClick={increaseQuantity}
					/>
				</div>
			</td>
			<td class="px-4 py-3 text-center">{props.price}</td>

			<td class="px-4 py-3 text-center">{quantity * props.price}</td>
		</tr>
	);
}
