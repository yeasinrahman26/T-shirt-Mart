import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../features/products/ProductsSlice";
import { placeOrder } from "../../features/order/orderSlice"; // Import your placeOrder action!
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    product_ids: "",
    s_product_qty: "",
    c_phone: "",
    c_name: "",
    courier: "steadfast",
    address: "",
    advance: null,
    cod_amount: "",
    discount_amount: null,
    delivery_charge: "80",
  });

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

  const openModal = () => {
    setFormData({
      ...formData,
      product_ids: String(product.id),
      s_product_qty: "1", // default 1 quantity
      cod_amount: product.price.toString(),
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Order Confirm!",
      icon: "success",
      draggable: true,
    });
    dispatch(placeOrder(formData));
    setIsModalOpen(false); // Close modal after placing order
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 relative">
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
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Buy Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#bebbbbef]  max-w-96 p-8 rounded-lg w-11/12 md:w-1/2 shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">Complete Your Order</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="product_ids"
                value={product.id}
                onChange={handleChange}
                readOnly
                className="border p-2 rounded"
                required
              />
              <input
                type="number"
                name="s_product_qty"
                value={formData.s_product_qty}
                placeholder="Quantity"
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="c_name"
                placeholder="Your Name"
                value={formData.c_name}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="c_phone"
                placeholder="Phone Number"
                value={formData.c_phone}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                name="cod_amount"
                placeholder="Amount"
                value={product.price}
                readOnly
                onChange={handleChange}
                className="border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
