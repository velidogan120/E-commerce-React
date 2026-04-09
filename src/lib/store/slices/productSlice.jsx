import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
  product: null,
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  sort: "",
  viewMode: "grid",
  categoryId: null,
  fetchState: "",
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
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
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
  setViewMode,
  setCategoryId,
  setProduct,
} = productSlice.actions;

export default productSlice.reducer;
