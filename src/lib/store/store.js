import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import ClientReducer from "./slices/clientSlice";
import ProductReducer from "./slices/productSlice";
import ShoppingCartReducer from "./slices/shoppingCartSlice";

const logger = createLogger();
const SHOPPING_CART_KEY = "shoppingCartCart";

const loadCartState = () => {
  try {
    const serializedCart = localStorage.getItem(SHOPPING_CART_KEY);

    if (!serializedCart) {
      return undefined;
    }

    return {
      shoppingCart: {
        cart: JSON.parse(serializedCart),
      },
    };
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    client: ClientReducer,
    product: ProductReducer,
    shoppingCart: ShoppingCartReducer,
  },
  preloadedState: loadCartState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.subscribe(() => {
  try {
    const cart = store.getState().shoppingCart.cart;
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(cart));
  } catch {
    console.log("Localstorage'e veri kaydedilirken bir hata oluştu.");
  }
});
