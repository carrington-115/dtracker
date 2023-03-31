import { createSlice } from "@reduxjs/toolkit";

export const checkSlice = createSlice({
  name: "check",
  initialState: {
    value: false,
  },
  reducers: {
    setUserStateActive: (state) => {
      return {
        ...state,
        value: true,
      };
    },
    setUserStateInactive: (state) => {
      return {
        ...state,
        value: false,
      };
    },
  },
});

export const selectCheck = (state) => state.check.value;

export const { setUserStateActive, setUserStateInactive } = checkSlice.actions;

export default checkSlice.reducer;
