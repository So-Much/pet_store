import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"; // for solid icons
import { far } from "@fortawesome/free-regular-svg-icons"; // for regular icons
// import { fal } from "@fortawesome/free-light-svg-icons"; // for light icons
// import { fas, far, fal } from "@awesome.me/kit-KIT_CODE/icons";

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
				{/* <FontAwesomeIcon icon="fa-solid fa-cart-plus" />{" "}
				 */}
				+
			</td>
		</tr>
	);
}
