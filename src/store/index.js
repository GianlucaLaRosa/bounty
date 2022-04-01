import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { menuReducer } from './menu/menu.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    menu: menuReducer,
  },
});
