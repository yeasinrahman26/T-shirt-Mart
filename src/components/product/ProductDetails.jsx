import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../features/products/ProductsSlice"; 

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items]);

  const product = items.find((item) => item.id === parseInt(id));

  if (loading || !product) {
    return (
      <div className="absolute inset-0 bg-white flex justify-center items-center z-50">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1">
        <img
          src={`https://admin.refabry.com/storage/product/${product.image}`}
          alt={product.name}
          className="w-full p-5 md:p-0 shadow-2xl"
        />
      </div>
      <div className="flex-1 p-5 md:p-0">
        <h1 className="text-3xl font-bold mb-4 capitalize">{product.name}</h1>
        <p className="text-2xl font-bold">Product Details:</p>
        <p className="mb-4 text-xl">{product.short_desc}</p>
        <p className="text-2xl text-green-600 font-semibold mb-6">
          ৳{product.price}TK
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
