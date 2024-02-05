import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  credentials: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    setAuthToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
    logOut: (state) => {
      state.token = "";
      state.role = "";
      state.originalRole = "";
    }
  },
});

export const {
  setAuthToken,
  setCredentials,
  setUser,
  logOut
} = authSlice.actions;

export default authSlice.reducer;
