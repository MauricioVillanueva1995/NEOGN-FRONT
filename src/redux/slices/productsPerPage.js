import { createSlice } from "@reduxjs/toolkit";

const productsPerPage = createSlice({
  name: "getProductsPerPage",
  initialState: {},
  reducers: {
    getProductsPerPage(state, action) {
      state.productsPerPage = action.payload;
    },
  },
});

export const { getProductsPerPage } = productsPerPage.actions;

export default productsPerPage.reducer;
