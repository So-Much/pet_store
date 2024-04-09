import CartIcon from "../../components/CartIcon";

import CheckoutItem from "../../components/CheckoutItem";

import food from "../../assets/petproduct.jpg";
import UserCheckOutInformation from "../../components/UserCheckoutInformation";
import { PaymentMethod } from "../../components/PaymentMethod";

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
										<th scope="col" class="px-4 py-3 text-center">
											Product name
										</th>
										<th scope="col" class="px-4 py-3">
											<div className="text-center">
												<div>Quantity</div>
											</div>
										</th>
										<th scope="col" class="px-4 py-3 text-center">
											Price
										</th>
										<th scope="col" class="px-4 py-3 text-center">
											Total
										</th>
									</tr>
								</thead>
								<tbody>
									<CheckoutItem
										name="Thức ăn cho chó con cỡ nhỏ ROYAL CANIN Mini Puppy"
										price={120000}
										img={food}
										quantity={1}
									/>
									<CheckoutItem
										name="Thức ăn cho chó con cỡ nhỏ ROYAL CANIN Mini Puppy"
										price={30000}
										img={food}
										quantity={2}
									/>

									{/* total row */}
									<tr class="border-b border-gray-700">
										<td
											class="px-4 py-3 text-center"
											style={{ width: "150px" }}
										>
											<b>Total</b>
										</td>

										<td
											scope="row"
											class="px-4 py-3 font-medium text-gray-900"
										></td>
										<td class="px-4 py-3"></td>
										<td class="px-4 py-3"></td>
										<td class="px-4 py-3 font-bold text-center">123456</td>
									</tr>
								</tbody>
							</table>
						</div>
						<UserCheckOutInformation />
						<button
							class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							data-ripple-light="true"
							style={{ width: "100%" }}
						>
							Purchase
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
