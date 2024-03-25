import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "../../utils/axios_config";
import { Link } from "react-router-dom";
const formatVND = require('../../utils/VND_formatter')

export default function Product() {
  const [listProducts, setListProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleSelectAll = (e) => {
    setCheckedAll(e.target.checked);
    const productsElement = document.querySelectorAll(".product_item");
  };

  useEffect(() => {
    axios
      .get("/api/product")
      .then((res) => {
        setListProducts(res.data);
        console.log("Product is gotten successfully");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [changed]);

  return (
    <div className="madmin_sidebar">
      <Sidebar />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              All products
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mt-3 md:mt-0">
            <a
              href="javascript:void(0)"
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add product
            </a>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead class="ltr:text-left rtl:text-right">
                <tr>
                  <th class="sticky inset-y-0 start-0 bg-white px-4 py-2 flex">
                    <label for="SelectAll" class="sr-only">
                      Select All
                    </label>

                    <input
                      type="checkbox"
                      id="SelectAll"
                      onChange={handleSelectAll}
                      class="size-5 rounded border-gray-300"
                    />
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Category
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Sale
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Sold
                  </th>
                  <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                {listProducts.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td class="sticky inset-y-0 start-0 bg-white px-4 py-2">
                        <label class="sr-only" for="Row1">
                          Row 1
                        </label>

                        <input
                          class="size-5 rounded border-gray-300"
                          type="checkbox"
                          id="Row1"
                        />
                      </td>
                      <td class="max-w-[140px] text-ellipsis overflow-hidden whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
                        {product.name}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.category}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {formatVND(product.price)}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.sale}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.sold}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <nav>
              <ul className="list-style-none flex">
                <li>
                  <Link
                  to={''} className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">
                    Previous
                  </Link>
                </li>
                <li>
                  <Link
                  to={''}
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                  >
                    1
                  </Link>
                </li>
                <li aria-current="page">
                  <a
                    className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                    href="#!"
                  >
                    2
                    <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                      (current)
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                  to={''}
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!"
                  >
                    3
                  </Link>
                </li>
                <li>
                  <Link
                  to={''}
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100"
                    href="#!"
                  >
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
