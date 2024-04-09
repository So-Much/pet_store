import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { axiosPermissionsRoles } from "../utils/axios_config";

export default function Cart({ handleLogout }) {
  const [user, setUser] = useState(null);
  const permissionRoles = ["STAFF", "MANAGER", "ADMIN"];
  const [isReRender, setIsReRender] = useState(false);

  const [listCartPreview, setListCartPreview] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }
    try {
      axiosPermissionsRoles(token)
        .get("/api/user/current")
        .then((res) => {
          console.log("User data:");
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axiosPermissionsRoles(token)
        .get("/api/cart/preview")
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  }, [isReRender]);
  return (
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <div className="flex flex-row gap-2">
        <Dropdown label={"Cart"}>
          <div className="flex flex-col max-w-lg p-4 max-h-dvh">
            <h2 className="text-xl font-semibold">
              Your cart
              <span className="text-sm text-gray-500"> (2 items)</span>
            </h2>
            <ul className="flex flex-col divide-y">
              <li className="flex flex-col py-3">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover size-20 dark:border- rounded outline-none bg-gray-500"
                    src=""
                    alt="Set of travel chargers"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-md font-semibold leading-snug sm:pr-8">
                          Set of travel chargers
                        </h3>
                        <div className="text-sm"></div>
                      </div>
                      <div className="text-right">
                        <p className="text-md font-semibold">8.99€</p>
                        <p className="text-sm line-through dark:text-gray-400">
                          15.99€
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex flex-col py-2">
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none bg-gray-500"
                    src=""
                    alt="Set of travel chargers"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-md font-semibold leading-snug sm:pr-8">
                          Set of travel chargers
                        </h3>
                        <p className="text-sm dark:text-gray-600">Black</p>
                      </div>
                      <div className="text-right">
                        <p className="text-md font-semibold">8.99€</p>
                        <p className="text-sm line-through dark:text-gray-400">
                          15.99€
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                          <rect width="32" height="200" x="168" y="216"></rect>
                          <rect width="32" height="200" x="240" y="216"></rect>
                          <rect width="32" height="200" x="312" y="216"></rect>
                          <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <Link className="text-right text-blue-500 text-sm">See all...</Link>
            <div className="space-y-1 text-right pb-2">
              <p>
                Total amount:
                <span className="font-semibold">357 €</span>
              </p>
              <p className="text-sm">Not including taxes and shipping costs</p>
            </div>
            <div className="flex justify-end space-x-4">
              <Link
                to={"/shop"}
                type="button"
                className="px-6 py-2 border rounded-md dark:border-violet-600"
              >
                Back to shop
              </Link>
              <Link
                to={`/checkout/${user?._id}`}
                type="button"
                className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600"
              >
                Continue to Checkout
              </Link>
            </div>
          </div>
        </Dropdown>
        <Dropdown label={"User"}>
          <Dropdown.Header>
            <span className="block text-sm">{user?.username}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          {permissionRoles.includes(user?.role) ? (
            <Dropdown.Item icon={HiViewGrid}>
              <Link to={"/admin/dashboard"} className="w-full h-full text-left">
                Dashboard
              </Link>
            </Dropdown.Item>
          ) : null}
          <Dropdown.Item icon={HiCog}>
            <Link to={"/profile"} className="w-full h-full text-left">
              Settings
            </Link>
          </Dropdown.Item>
          <Dropdown.Item icon={HiCurrencyDollar}>
            <Link
              to={`/orders/${user?._id}`}
              className="w-full h-full text-left"
            >
              Orders
            </Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            icon={HiLogout}
            onClick={() => {
              localStorage.removeItem("token");
              setIsReRender(!isReRender);
              handleLogout();
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
