import { axiosPermissionsRoles } from "../utils/axios_config";
import CartIcon from "./CartIcon";
import { Link, useNavigate } from "react-router-dom";

export function Product(props) {
  const navigate = useNavigate();

  // function displayModel(props) {}4
  const handleAddToCart = (product) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }

      axiosPermissionsRoles(token)
        .post(
          "/api/cart/add",
          {
            product_id: product._id,
            quantity: 1,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  return (
    <div>
      {/* <div className="mx-auto px-5 flex">
				<div className="h-max max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
					<img
						className="w-full rounded-lg object-cover object-center"
						
						alt="product"
						onClick={props.onProductClick}
					/>
					<p
						className="my-4 pl-4 font-bold text-gray-500 truncate text-base"
						onClick={props.onProductClick}
					>
						{props.name}
					</p>
					<div className="flex content-between">
						<p className="mb-4 ml-4 text-lg font-semibold text-gray-800">
							{props.price}
						</p>
					</div>
				</div>
			</div>
			<CartIcon /> */}
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
          <CartIcon
            handleAddToCart={() => {
              handleAddToCart(props.product);
            }}
          />
        </div>
      </div>
    </div>
  );
}
