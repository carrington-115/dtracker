import { configureStore } from "@reduxjs/toolkit";
import checkReducer from "../features/userAuthentication/checkSlice";

export const store = configureStore({
  reducer: {
    check: checkReducer,
  },
});
