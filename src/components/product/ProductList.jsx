import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import hooks
import { fetchProducts } from "../../features/products/ProductsSlice"; // Import the async thunk
import ProductCard from "./ProductCard";


const ProductList = () => {
  const dispatch = useDispatch(); // Dispatch function to trigger Redux actions
  const { items, status, error } = useSelector((state) => state.products); // Get the products state

  useEffect(() => {
    // Dispatch the fetchProducts action to fetch data
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading...</p>; // Show loading message
  if (status === "failed") return <p>{error}</p>; // Show error message

  return (
    <div>
        <h1 className="text-center text-4xl font-bold">All Products</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} /> // Render each product using ProductCard
        ))}
      </div>
    </div>
  );
};

export default ProductList;
