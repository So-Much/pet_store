import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../utils/axios_config";
import Selectec_ from "../../components/Selectec_";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);

  const { product_id } = useParams();
  console.log(product);
  console.log(categories);

  useEffect(() => {
    axios
      .get("/api/product/" + product_id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    axios.get('/api/product/category')
    .then((res) => setCategories(res.data))
    .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex gap-10 p-4">
      <div className="w-1/2 max-w-[1440px]">
        <div className="relative overflow-hidden">
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
            className="w-full max-h-dvh object-cover rounded-xl"
            src="https://source.unsplash.com/random"
            alt="product"
          />
          <div className="absolute bottom-5 w-full h-[120px] rounded-lg">
            <div className="w-full mx-4 rounded-lg bg-slate-400 bg-opacity-50 h-full flex gap-2 p-2">
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
              <img
                className="rounded-lg"
                src="https://source.unsplash.com/random"
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-4 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{product.name}</h2>
        <div className="font-medium text-base">
          Category: {" "}
          <span>
            <Selectec_ name={'category'} values={categories} currentValue={product.category} />
            {product.category}
          </span>
        </div>
        <div className="font-medium text-base">
          Description: {" "}
          <span className="font-normal">{product.description}</span>
        </div>
        <div> {product.price} </div>
        <div> {product.quantity} </div>
        <div> {product.rating} </div>
        <div> {product.sale} </div>
        <div> {product.sold} </div>
        <div> {product.status} </div>
      </div>
    </div>
  );
}
