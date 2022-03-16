import { createSlice } from "@reduxjs/toolkit";

const isLoggedIn = !!localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn,
  },
  reducers: {
    login(state, action) {
      //  payload[0] => expiration time (sec), payload[1] => token, both given by Firebase
      let remainingTime = 20; //action.payload[0];
      let currentTime = new Date().getTime();
      let expirationTime = new Date(currentTime + remainingTime * 1000);

      if (action.payload) {
        state.isLoggedIn = true;
        localStorage.setItem("expir", expirationTime);
        localStorage.setItem("token", action.payload[1]);
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("expir");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
