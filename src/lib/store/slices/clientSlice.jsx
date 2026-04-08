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
      const {
        email,
        name,
        role_id,
        token,
        rememberMe = false,
      } = action.payload;

      state.user = { email, name, role_id, rememberMe };

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }
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
    logout: (state) => {
      state.user = null;
      state.roles = [];

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { setUser, setRoles, toggleTheme, setLanguage, logout } =
  clientSlice.actions;

export default clientSlice.reducer;
