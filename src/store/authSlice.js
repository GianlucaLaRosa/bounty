import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    expirationTime: 3600,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      if (action.payload) console.log(action);
      console.log(action.payload[0], action.payload[1]);
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
