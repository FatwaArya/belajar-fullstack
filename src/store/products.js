//create userSlice
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products", async () => {
  const response = await axios.post(`${BASE_API}products`);
  return response.data;
});

export const getProduct = createAsyncThunk("products", async (id) => {
  const response = await axios.post(`${BASE_API}products/${id}`);
  return response.data;
});

const productAdapter = createEntityAdapter({
  selectId: (product) => product.product.id,
});

const productsSlice = createSlice({
  name: "products",
  initialState: productAdapter.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      //   productAdapter.setAll(state, action.payload || []);
      console.log("action.payload", action.payload);
    });

    //   .addCase(getProduct.fulfilled, (state, action) => {
    //     productAdapter.setAll(state, action.payload);
    //   });
  },
});

export const productsSelector = productAdapter.getSelectors(
  (state) => state.products
);

export default productsSlice.reducer;
