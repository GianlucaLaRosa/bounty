import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const isLoggedIn = !!localStorage.getItem("uid");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn,
  },
  reducers: {
    login(state, action) {
      let expirationTime = new Date(action.payload.expirTime);

      if (action.payload) {
        state.isLoggedIn = true;
        localStorage.setItem("expir", expirationTime);
        localStorage.setItem("uid", action.payload.uid);
      }
    },
    logout(state) {
      signOut(auth);
      state.isLoggedIn = false;
      localStorage.removeItem("expir");
      localStorage.removeItem("uid");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
