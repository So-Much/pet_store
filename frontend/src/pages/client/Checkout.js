import CartIcon from "../../components/CartIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Checkout() {
	return (
		<div>
			<section class="p-3 sm:p-5">
				<div class="mx-auto max-w-screen-xl px-4 lg:px-12">
					<div class="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
						<div class="overflow-x-auto">
							<table class="w-full text-sm text-left text-gray-500 text-gray-400">
								<thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-700 text-white">
									<tr>
										<th scope="col" class="px-4 py-3"></th>
										<th scope="col" class="px-4 py-3">
											Product name
										</th>
										<th scope="col" class="px-4 py-3">
											<div className="grid-cols-3">
												<FontAwesomeIcon icon={faPlus} />
												<div>Quantity</div>
												<FontAwesomeIcon icon={faMinus} />
											</div>
										</th>
										<th scope="col" class="px-4 py-3">
											Price
										</th>
										<th scope="col" class="px-4 py-3">
											Total
										</th>
									</tr>
								</thead>
								<tbody></tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
