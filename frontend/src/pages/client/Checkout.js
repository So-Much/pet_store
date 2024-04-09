import CartIcon from "../../components/CartIcon";
import { Link, useNavigate } from "react-router-dom";

import CheckoutItem from "../../components/CheckoutItem";

import food from "../../assets/petproduct.jpg";
import UserCheckOutInformation from "../../components/UserCheckoutInformation";
import { PaymentMethod } from "../../components/PaymentMethod";
import { useEffect, useState } from "react";
import { axios, axiosPermissionsRoles } from "../../utils/axios_config";
import VND_formatter from "../../utils/VND_formatter";

export default function Checkout() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const [cart, setCart] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  

  const navigate = useNavigate();

  const handleCreateOrder = () => {
	try {
	  const token = localStorage.getItem("token");
	  if (!token) {
		setCart(null);
		navigate("/signin");
		return;
	  }
	  axiosPermissionsRoles(token)
		.post("/api/order", {
		  firstname,
		  lastname,
		  phonenumber,
		  address,
		  payment,
		})
		.then((res) => {
		  console.log("🚀 ~ Checkout ~ res", res.data);
		  navigate("/order");
		})
		.catch((err) => {
		  console.log("🚀 ~ Checkout ~ err", err);
		  navigate('/')
		});
	} catch (error) {
	  console.log("🚀 ~ Checkout ~ error", error);
	}
  
  }

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setCart(null);
        navigate("/");
        return;
      }
      axiosPermissionsRoles(token)
        .get("/api/cart")
        .then((res) => {
          setProducts(res.data.products);
          res.data.products.map(({ product, quantity }) => {
            setTotalPrice((prev) => {
              return prev + product.price * quantity;
            });
          });
        })
        .catch((err) => {
          // console.log(err);
          navigate("/");
        });
    } catch (error) {
      // console.log(error);
      navigate("/");
    }
  }, []);

  // const
  return (
    <div>
      <section class="p-3 sm:p-5">
        <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div class="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-400">
                <thead class="text-xs uppercase bg-gray-700 text-white">
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
                  {products?.map(({ product, quantity }) => {
                    console.log("product is: ", product);
                    return (
                      <CheckoutItem
                        name={product.name}
                        price={product.price}
                        img={product.images[0]}
                        quantity={quantity}
                      />
                    );
                  })}

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
                    <td class="px-4 py-3 font-bold text-center">
                      {VND_formatter(totalPrice / 2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <UserCheckOutInformation setFirstname={(e) => {
				setFirstname(e.target.value);
			}} setLastname={(e) => {
				setLastname(e.target.value);
			}} setPhonenumber={(e) => {
				setPhonenumber(e.target.value);
			}} setAddress={(e) => {
				setAddress(e.target.value);
			}} setPayment={setPayment} />
            <button
              onClick={() => {
				handleCreateOrder();
				// navigate("/order");
                // navigate("/order");
              }}
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
  console.log("🚀 ~ Checkout ~ data:", data)
