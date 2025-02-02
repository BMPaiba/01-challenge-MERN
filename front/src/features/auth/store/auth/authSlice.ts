import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { User } from "../../interface/user.interface";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      if (!action.payload?.user || !action.payload?.token) {
        console.warn("Invalid payload, skipping login.");
        return;
      }
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      Cookies.set("jwt", action.payload.token, { expires: 1 });
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
      Cookies.remove("jwt");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
