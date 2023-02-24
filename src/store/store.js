import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import productSlice from "./products";

export default configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
  },
});
