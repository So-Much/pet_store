import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"; // for solid icons
import { far } from "@fortawesome/free-regular-svg-icons"; // for regular icons
import CartIcon from "./CartIcon";
// import { fal } from "@fortawesome/free-light-svg-icons"; // for light icons

export function ResultTableItem(props) {
	return (
		<tr class="border-b border-gray-700">
			<td class="px-4 py-3">
				<img src={props.img} />
			</td>

			<td scope="row" class="px-4 py-3 font-medium text-gray-900">
				{props.itemName}
			</td>
			<td class="px-4 py-3">{props.brand}</td>
			<td class="px-4 py-3">{props.description}</td>
			<td class="px-4 py-3">{props.price}</td>
			<td class="px-4 py-3 text-xl pointer-cusor ">
				<CartIcon />
			</td>
		</tr>
	);
}
