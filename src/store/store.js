import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./student";
import userSlice from "./user";

export default configureStore({
  reducer: {
    student: studentSlice,
    user: userSlice,
  },
});
