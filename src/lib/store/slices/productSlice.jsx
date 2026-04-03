import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setFetchState: (state, action) => {
      state.fetchState = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  setCategories,
  setProductList,
  setTotal,
  setFetchState,
  setLimit,
  setOffset,
  setFilter,
} = productSlice.actions;

export default productSlice.reducer;
