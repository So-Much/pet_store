import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function CartIcon() {
	const [openToast, setOpenToast] = useState(false);
	const toast = () => {
		setOpenToast(true);
		setTimeout(() => {
			setOpenToast(false);
		}, 1500);
	};
	return (
		<div className="z-50">
			<FontAwesomeIcon
				className="cursor-pointer"
				icon={faCartPlus}
				onClick={toast}
			/>
			{openToast ? (
				<div>
					<div
						class="fixed bottom-5 right-5 max-w-xs bg-green-500 text-sm text-white rounded-md shadow-lg mb-3 ml-3 z-50"
						role="alert"
					>
						<div class="flex p-4">Product was added to your card</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
