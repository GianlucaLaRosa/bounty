import { createSlice } from '@reduxjs/toolkit';
// import { DUMMY_DATA, DUMMY_SECTIONS } from '../../dummyDatas';

const initialState = {
  sections: [], // DUMMY_SECTIONS
  items: [], // DUMMY_DATA
  isFetching: false,
};

export const menuSliceKey = 'menu';

export const menuSlice = createSlice({
  name: menuSliceKey,
  initialState,
  reducers: {
    fetchMenu: (state) => {
      state.isFetching = true;
    },
    fetchMenuSuccess: (state, { payload }) => {
      state.sections = payload.sections;
      state.items = payload.items;
      state.isFetching = false;
    },
    fetchMenuFailure: () => {
      return initialState;
    },
  },
});

export const { fetchMenu, fetchMenuFailure, fetchMenuSuccess } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
