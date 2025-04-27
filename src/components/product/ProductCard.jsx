import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    
    <div className="card bg-gray-300 hover:shadow-none shadow-2xl">
      <figure>
        <img
          className="h-48  object-container m-1"
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt="Shoes"
        />
      </figure>
      <div className="card-body  bg-gray-200 ">
        <h2 className=" font-bold text-2xl">{product.name}</h2>
        <h2 className=" text-lg">
          <span className="text-xs ">TK </span>
          {product.price} on{" "}
          <span className="text-red-500 text-xs font-semibold">
            {" "}
            <span className="text-[10px] ">TK</span>
            {product.discount_amount} Discount
          </span>
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
