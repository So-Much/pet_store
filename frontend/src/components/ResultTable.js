import { ResultTableItem } from "./ResultTableItem";
import food from "../assets/petproduct.jpg";

export function ResultTable(props) {
	return (
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
										Brand
									</th>
									<th scope="col" class="px-4 py-3">
										Description
									</th>
									<th scope="col" class="px-4 py-3">
										Price
									</th>
									<th scope="col" class="px-4 py-3">
										<span class="sr-only">Actions</span>
									</th>
									<th scope="col" class="px-4 py-3"></th>
								</tr>
							</thead>
							<tbody>
								{props.items.map((item) => {
									return (
										<ResultTableItem
											itemName={item.name}
											price={item.price}
											brand={item.brand}
											description={item.description}
											img={item.images[0]}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}
