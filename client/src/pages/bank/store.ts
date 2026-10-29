import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import accountReducer from "./accountSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
