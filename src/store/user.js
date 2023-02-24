//create userSlice
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API, TOKEN } from "./constants";

const registerUser = createAsyncThunk("users", async (user) => {
  const response = await axios.post(`${BASE_API}users`, user);
  return response.data;
});

const loginUser = createAsyncThunk("users", async (user) => {
  const response = await axios.post(`${BASE_API}users/login`, user);
  return response.data;
});

const logoutUser = createAsyncThunk("users", async (user) => {
  const response = await axios.post(`${BASE_API}/users/logout`, user);
  return response.data;
});

export const getUsers = createAsyncThunk("users", async () => {
  const response = await axios.get(`${BASE_API}users/me`, TOKEN);
  return response.data;
});

const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const usersSlice = createSlice({
  name: "users",
  initialState: userAdapter.getInitialState(),
  extraReducers: {
    [registerUser.fulfilled]: userAdapter.addOne,
    [loginUser.fulfilled]: userAdapter.addOne,
    [logoutUser.fulfilled]: userAdapter.removeOne,
    [getUsers.fulfilled]: userAdapter.addOne,
  },
});

export const usersSelector = userAdapter.getSelectors((state) => state.users);

export default usersSlice.reducer;
