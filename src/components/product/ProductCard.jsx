import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card   hover:shadow-none shadow-2xl">
      <div className="badge border-none m-2 bg-[#EACE34] text-[#EC1C27] ">
        <span className=" text-lg font-bold">
          -{product.discount_amount}
          <span className="text-[10px] ">TK</span>
        </span>
      </div>
      <figure>
        <img
          className="h-48  object-container m-1"
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-gray-100 mt-2  ">
        <h2 className=" font-bold text-2xl">{product.name}</h2>
        <h2 className=" font-semibold text-lg">
          <span className="text-xs font-medium ">TK </span>
          {product.price}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
