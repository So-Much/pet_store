import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "../../utils/axios_config";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
const formatVND = require("../../utils/VND_formatter");

export default function Product() {
  const [listProducts, setListProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [changed, setChanged] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 8;

  const handleSelectAll = (e) => {
    setCheckedAll(e.target.checked);
    if (e.target.checked) {
      setProductsSelected(listProducts.map((product) => product._id));
    } else {
      setProductsSelected([]);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get("/api/product")
  //     .then((res) => {
  //       setListProducts(res.data);
  //       console.log("Product is gotten successfully");
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, [changed]);

  useEffect(() => {
    console.log("Fetching data...");
    try {
      axios
        .get(`/api/product/page/?page=${currentPage}&limit=${limit}`)
        .then((res) => {
          setListProducts(res.data.products);
          setTotalPages(res.data.totalPages);
          console.log(res);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [currentPage, changed]);

  return (
    <div className="madmin_sidebar">
      <Sidebar />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex mt-10">
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
            <button
              // onClick={}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Add product
            </button>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="sticky inset-y-0 start-0 bg-white px-4 py-2 flex">
                    <label htmlFor="SelectAll" className="sr-only">
                      Select All
                    </label>

                    <input
                      type="checkbox"
                      id="SelectAll"
                      onChange={handleSelectAll}
                      className="size-5 rounded border-gray-300"
                    />
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Category
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Sale
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {listProducts.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                        <label className="sr-only" htmlFor="Row1">
                          Row 1
                        </label>

                        <input
                          value={product._id}
                          className="size-5 rounded border-gray-300 product_item"
                          type="checkbox"
                          checked={productsSelected.includes(product._id) || checkedAll}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setProductsSelected(prev => [...prev, e.target.value]);
                            } else {
                              setProductsSelected(prev => prev.filter(item => item !== e.target.value));
                            }
                          }}
                          id="Row1"
                        />
                      </td>
                      <td className="max-w-[140px] text-ellipsis overflow-hidden whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900 hover:underline">
                        <Link to={product._id}>{product.name}</Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.category}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {formatVND(product.price)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.sale}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.quantity}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        {product.status}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                        Delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePagination={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
