import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialState,
  reducers: {
    setCart: (state, action) => {
      const product = state.cart.find(
        (item) => item.product.id === action.payload.id,
      );
      if (product) {
        product.count += 1;
      } else {
        state.cart = [
          ...state.cart,
          {
            checked: true,
            count: 1,
            product: { ...action.payload },
          },
        ];
      }
    },
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    toggleCartItemChecked: (state, action) => {
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload,
      );

      if (cartItem) {
        cartItem.checked = !cartItem.checked;
      }
    },
    setAllCartItemsChecked: (state, action) => {
      state.cart.forEach((item) => {
        item.checked = action.payload;
      });
    },
    incrementCartItemCount: (state, action) => {
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload,
      );

      if (cartItem) {
        cartItem.count += 1;
      }
    },
    decrementCartItemCount: (state, action) => {
      const cartItem = state.cart.find(
        (item) => item.product.id === action.payload,
      );

      if (cartItem && cartItem.count > 1) {
        cartItem.count -= 1;
      }
    },
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product.id !== action.payload,
      );
    },
  },
});

export const {
  setCart,
  setPayment,
  setAddress,
  toggleCartItemChecked,
  setAllCartItemsChecked,
  incrementCartItemCount,
  decrementCartItemCount,
  removeCartItem,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
