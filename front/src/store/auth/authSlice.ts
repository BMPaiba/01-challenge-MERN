import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie"; 

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;  
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: any; token: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      
      Cookies.set("jwt", action.payload.token, { expires: 7 });  
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      
      Cookies.remove("jwt");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
