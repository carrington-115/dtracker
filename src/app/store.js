import { configureStore } from "@reduxjs/toolkit";
import personalReducer from "../features/profile/personalInfoSlice";
import addressReducer from "../features/profile/addressInfoSlice";

export const store = configureStore({
  reducer: {
    personal: personalReducer,
    address: addressReducer,
  },
});
