import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create AsyncThunk for placing order
export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData) => {
    const response = await axios.post(
      "https://admin.refabry.com/api/public/order/create",
      orderData
    );
    return response.data;
  }
);

// Create Order Slice
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderInfo: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orderInfo = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
