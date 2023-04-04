import { createSlice } from "@reduxjs/toolkit";

export const personalInfoSlice = createSlice({
  name: "personal",
  initialState: {
    name: "",
    phoneNumber: "",
    done: false,
  },
  reducers: {
    storePhoneNumber: (state, action) => {
      state.phoneNumber += action.payload;
    },
    storeUserName: (state, action) => {
      state.name += action.payload;
    },
    setFormDone: (state) => {
      state.done = true;
    },
  },
});

export const selectUserName = (state) => state.personal.name;
export const setDone = (state) => state.personal.done;
export const selectPhoneNumber = (state) => state.personal.phoneNumber;
export const { storePhoneNumber, storeUserName, setFormDone } =
  personalInfoSlice.actions;
export default personalInfoSlice.reducer;
