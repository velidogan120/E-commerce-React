import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import ClientReducer from "./slices/clientSlice";
import AuthReducer from "./slices/authSlice";
import ProductReducer from "./slices/productSlice";
import ShoppingCartReducer from "./slices/shoppingCartSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    client: ClientReducer,
    auth: AuthReducer,
    product: ProductReducer,
    shoppingCart: ShoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
