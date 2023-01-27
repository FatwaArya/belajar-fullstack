//create userSlice

import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});

export const selectUser = (state) => state.user;

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
