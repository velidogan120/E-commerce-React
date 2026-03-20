import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./slices/themeSlice";
export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
  },
});
