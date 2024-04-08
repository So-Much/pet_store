import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "../../utils/axios_config";
import { Link, useNavigate } from "react-router-dom";
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

  console.log("🚀 ~ Product ~ productsSelected:", productsSelected);

  const navigate = useNavigate();


  const handleSelectAll = (e) => {
    setCheckedAll(e.target.checked);
    if (e.target.checked) {
      setProductsSelected(listProducts.map((product) => product._id));
    } else {
      setProductsSelected([]);
    }
  };

  const handleDeleteSelected = () => {
    console.log("🚀 ~ handleDeleteSelected ~ productsSelected", productsSelected);
    try {
      axios
        .delete(
          "/api/product/selectedProducts",
          { data: {
            products: productsSelected
          } },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          setChanged(!changed);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }
      axios
        .get(`/api/product/page/?page=${currentPage}&limit=${limit}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setListProducts(res.data.products);
          setTotalPages(res.data.totalPages);
          console.log(res);
        })
        .catch((err) => {
          // not permission error
          navigate('/');
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
                  <th className="sticky inset-y-0 start-0 bg-white px-4 py-3 flex">
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
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    Category
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    Sale
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    Status
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
                    {productsSelected.length !== 0 ? (
                      <div>
                        <button
                          className="leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                          onClick={() => {
                            // setCurrentSelectedUser(item);
                            document.getElementById("my_modal_2").showModal();
                          }}
                        >
                          Del
                        </button>
                        <dialog
                          id="my_modal_2"
                          className="modal rounded-lg p-2"
                        >
                          <div className="w-full h-full p-5">
                            <h3 className="font-bold text-lg text-start">
                              Delete Product Selected
                            </h3>
                            <p className="py-4 text-lg">
                              Do you want to delete all product are selected?
                            </p>
                          </div>
                          <form
                            method="dialog"
                            className="modal-backdrop p-2 flex gap-1.5 items-end justify-end"
                          >
                            <button
                              onClick={() => {}}
                              className="text-base bg-slate-200 hover:bg-slate-300 p-2 rounded-md px-3"
                            >
                              Close
                            </button>
                            <button
                              onClick={() => {
                                handleDeleteSelected();
                                // setReRender(!reRender);
                                // setCurrentSelectedUser({});
                              }}
                              className="text-base bg-red-500 hover:bg-red-600 p-2 rounded-md px-3"
                            >
                              Delete
                            </button>
                          </form>
                        </dialog>
                      </div>
                    ) : null}
                  </th>
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
                          checked={
                            productsSelected.includes(product._id) || checkedAll
                          }
                          onChange={(e) => {
                            if (e.target.checked) {
                              setProductsSelected((prev) => [
                                ...prev,
                                e.target.value,
                              ]);
                            } else {
                              setProductsSelected((prev) =>
                                prev.filter((item) => item !== e.target.value)
                              );
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
                        <button
                          className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                          onClick={() => {
                            // setCurrentSelectedUser(item);
                            document.getElementById("my_modal_2").showModal();
                          }}
                        >
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                            alt="delete"
                            className="size-3"
                          />
                        </button>
                        {/* main content modal */}
                        <dialog
                          id="my_modal_2"
                          className="modal rounded-lg p-2"
                        >
                          <div className="w-full h-full p-5">
                            <h3 className="font-bold text-lg text-start">
                              Delete Product
                            </h3>
                            <p className="py-4 text-lg">
                              Do you want to delete this Product?
                            </p>
                          </div>
                          <form
                            method="dialog"
                            className="modal-backdrop p-2 flex gap-1.5 items-end justify-end"
                          >
                            <button
                              onClick={() => {
                                // setCurrentSelectedUser({});
                              }}
                              className="text-base bg-slate-200 hover:bg-slate-300 p-2 rounded-md px-3"
                            >
                              Close
                            </button>
                            <button
                              onClick={() => {
                                // handleDelete();
                                // setReRender(!reRender);
                                // setCurrentSelectedUser({});
                              }}
                              className="text-base bg-red-500 hover:bg-red-600 p-2 rounded-md px-3"
                            >
                              Delete
                            </button>
                          </form>
                        </dialog>
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
