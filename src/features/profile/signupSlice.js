import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "signup",
  initialState: {
    email: "",
  },
  reducers: {
    updateEmail: (state) => {},
  },
});

export const {} = signupSlice.actions;
export default signupSlice.reducer;
