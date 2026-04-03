import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || sessionStorage.getItem("token") || null,
  roles: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, rememberMe = true } = action.payload;

      state.user = user;
      state.token = token;

      if (rememberMe) {
        localStorage.setItem("token", token);
        sessionStorage.removeItem("token");
      } else {
        sessionStorage.setItem("token", token);
        localStorage.removeItem("token");
      }
    },
    setRoles: (state, action) => {
      state.roles = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.roles = [];

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { setCredentials, setRoles, logout } = authSlice.actions;
export default authSlice.reducer;
