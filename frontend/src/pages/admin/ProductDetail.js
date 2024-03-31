import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axios_config";
import AutocompleteInput from "../../components/AutocompleteInput";
import RadioInput from "../../components/RadioInput";

const { productImage } = require("../../utils/defaultImage");

export default function ProductDetail() {
  const productStatus = ["active", "inactive"];
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [currentValue, setCurrentValue] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [currentImagePreview, setCurrentImagePreview] = useState("");
  const navigate = useNavigate();

  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showDeniedModal, setShowDeniedModal] = useState(false);

  const { product_id } = useParams();

  console.log("currentValue:", currentValue);

  useEffect(() => {
    setProductImages([
      "https://i.pinimg.com/474x/72/10/8a/72108ac216947eef5ec7cd031516cc49.jpg",
      "https://source.unsplash.com/random",
    ]);
  }, []);
  console.log(currentValue);

  const handleDeleteImage = (e) => {
    const image = e.target.dataset.name;
    const images = productImages.filter((img) => img !== image);
    setProductImages(images);
    setCurrentValue((prev) => ({
      ...prev,
      images: images,
    }));
  };

  const handleValueChanging = (e) => {
    console.log("e.target.value:", e.target.value);
    console.log("e.target.name:", e.target.name);
    setCurrentValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleUpdateProduct = () => {
    axios
      .put("/api/product/" + product_id, currentValue)
      .then((res) => {
        console.log("Product is updated successfully");
        console.log(res.data);
        navigate("/admin/product");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("/api/product/" + product_id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    axios
      .get("/api/product/category")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex gap-10 p-4">
      <div className="w-1/2 max-w-[1440px]">
        <div className="relative">
          <div className="absolute top-0">
            <Link to={"/admin/product"}>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="bg-slate-300 bg-opacity-50 rounded-tl-lg p-2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                  fill="#33363F"
                />
              </svg>
            </Link>
          </div>
          <img
            className="w-full min-h-dvh max-h-dvh object-contain rounded-xl object-center bg-slate-300"
            src={
              (productImages.includes(currentImagePreview)
                ? currentImagePreview
                : productImages[0]) ||
              productImage ||
              productImages[0]
            }
            alt="product"
          />
          <div className="absolute bottom-5 w-full h-[120px] rounded-lg overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-slate-500 scrollbar-track-rounded-full">
            <div className="w-fit mx-4 rounded-lg bg-slate-600 bg-opacity-50 h-full flex gap-4 p-2">
              <div className="h-full flex relative group">
                <img
                  className="rounded-lg shadow-md"
                  src={productImage}
                  alt="product"
                />
                <svg
                  className="size-1/2 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.5"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {productImages.map((image, index) => {
                return (
                  <div className="h-full flex relative group" key={index}>
                    <img
                      onClick={(e) => setCurrentImagePreview(e.target.src)}
                      className="rounded-lg hover:scale-105 shadow-md"
                      src={image}
                      alt="product"
                    />
                    <svg
                      className="size-5 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:visible invisible"
                      viewBox="0 0 24 24"
                      fill="#E72929"
                      data-name={image}
                      onClick={handleDeleteImage}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        data-name={image}
                        onClick={handleDeleteImage}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <div className="font-medium text-base">
          Category:{" "}
          <span>
            <AutocompleteInput
              suggestions={categories}
              name="category"
              defaultValue={product.category}
              handleChangeComplete={(value) => {
                setCurrentValue((prev) => ({
                  ...prev,
                  category: value,
                }));
              }}
            />
          </span>
        </div>
        <div className="font-medium text-base">
          Description:{" "}
          <textarea
            className="font-normal w-full h-full p-2 border border-gray-300 rounded-md scrollbar-thin"
            rows={5}
            cols={10}
            defaultValue={product.description}
            onChange={handleValueChanging}
            value={currentValue.description}
          ></textarea>
        </div>
        <div className="font-medium text-base flex mt-4">
          Price:
          <input
            type="number"
            name="price"
            defaultValue={product.price}
            value={currentValue.price || product.price}
            onChange={handleValueChanging}
            className="w-1/2 p-2 border border-gray-300 rounded-md font-normal ml-2"
          />
        </div>
        <div className="font-medium text-base flex">
          Quantity:
          <input
            type="number"
            name="quantity"
            defaultValue={product.quantity}
            value={currentValue.quantity || product.quantity}
            onChange={handleValueChanging}
            className="w-1/2 p-2 border border-gray-300 rounded-md font-normal ml-2"
          />
        </div>
        <div>
          {" "}
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900">
              {/* average rating */}
              4.95
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <Link
              to={"/admin/product/" + product_id + "/reviews"}
              className="text-sm font-medium text-gray-900 underline hover:no-underline"
            >
              {/* total rating */}
              {product.rating} reviews
            </Link>
          </div>
        </div>
        <div className="font-medium text-base flex">
          Sale:
          <input
            type="number"
            name="sale"
            defaultValue={product.sale}
            value={currentValue.sale || product.sale}
            onChange={handleValueChanging}
            className="w-1/2 p-2 border border-gray-300 rounded-md font-normal ml-2"
          />
        </div>
        <div className="font-medium text-base">
          Sold: <span> {product.sold}</span>
        </div>
        <div>
          <RadioInput
            name="status"
            defaultValue={product.status}
            selections={productStatus}
            handleValueChange={handleValueChanging}
          />
        </div>
        <div className="flex gap-4">
          <button
            className="bg-indigo-500 text-white p-2 px-4 rounded-md"
            onClick={() => {
              const isChanged = Object.keys(currentValue).length > 0;
              setShowAcceptModal(isChanged);
              if (!isChanged) navigate("/admin/product");
            }}
          >
            Update
          </button>
          <button
            className="bg-red-500 text-white p-2 px-4 rounded-md"
            onClick={() => {
              const isChanged = Object.keys(currentValue).length > 0;
              setShowDeniedModal(isChanged);
              if (!isChanged) navigate("/admin/product");
            }}
          >
            Cancel
          </button>
          {showAcceptModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Update product</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowAcceptModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Are you sure about these changes?
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowAcceptModal(false);
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowAcceptModal(false);
                          handleUpdateProduct();
                        }}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {showDeniedModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Update product</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowAcceptModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Are you sure about close without change?
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowDeniedModal(false);
                          navigate("/admin/product");
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowDeniedModal(false);
                          handleUpdateProduct();
                        }}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
