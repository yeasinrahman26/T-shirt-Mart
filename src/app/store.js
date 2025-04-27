import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/ProductsSlice";
import orderReducer from '../features/order/orderSlice'
export const store = configureStore({
  reducer: {
    products: productsReducer,
    order: orderReducer,
  },
});
