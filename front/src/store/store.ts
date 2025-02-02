import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/auth/authSlice";

import { Middleware } from "@reduxjs/toolkit";

const persistanceMiddleware: Middleware<{}> = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("_redux_state_", JSON.stringify({ auth: store.getState().auth }));
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistanceMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
