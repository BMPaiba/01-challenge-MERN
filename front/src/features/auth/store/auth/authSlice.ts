import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { User } from "../../interface/user.interface";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const defaultState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const initialState: AuthState = (()=>{
  const persistedState = localStorage.getItem("_redux_state_");
  if (persistedState) {
    const state = JSON.parse(persistedState);
    return state.auth ?? defaultState;
  }
  return defaultState
})()

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
      Cookies.set("jwt", action.payload.token, { expires: 1 });
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      Cookies.remove("jwt");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
