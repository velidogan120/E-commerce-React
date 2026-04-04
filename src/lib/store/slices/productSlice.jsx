import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  sort: "",
  categoryId: null,
  fetchState: "NOT_FETCHED",
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
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
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const {
  setCategories,
  setProducts,
  setTotal,
  setFetchState,
  setLimit,
  setOffset,
  setFilter,
  setSort,
  setCategoryId,
} = productSlice.actions;

export default productSlice.reducer;
