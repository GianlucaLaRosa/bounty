import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = !!localStorage.getItem("token");
let expirTimer;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    expirationTime: undefined,
    isLoggedIn,
  },
  reducers: {
    login(state, action) {
      //*  payload[0] => expiration time (sec); payload[1] => token
      if (action.payload) {
        state.isLoggedIn = true;
        state.expirationTime = action.payload[0];
        localStorage.setItem("token", action.payload[1]);
        expirTimer = setTimeout(this.reducers.logout(), 15000);
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      state.expirationTime = undefined;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
