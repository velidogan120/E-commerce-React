import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: JSON.parse(localStorage.getItem("theme")) || "light",
  language: "en",
};

const clientSlice = createSlice({
  name: "client",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setUser, setRoles, toggleTheme, setLanguage } =
  clientSlice.actions;

export default clientSlice.reducer;
