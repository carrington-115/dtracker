import { createSlice } from "@reduxjs/toolkit";

export const addressInfoSlice = createSlice({
  name: "address",
  initialState: {
    city: "",
    country: "",
    quarter: "",
    done: false,
  },
  reducers: {
    storeCountry: (state, action) => {
      state.country += action.payload;
    },
    storeCity: (state, action) => {
      state.city += action.payload;
    },
    storeQuarter: (state, action) => {
      state.quarter += action.payload;
    },
    setFormDone: (state) => {
      state.done = true;
    },
  },
});

export const selectCountry = (state) => state.address.country;
export const setDone = (state) => state.address.done;
export const selectCity = (state) => state.address.city;
export const selectQuarter = (state) => state.address.quarter;
export const { storeCountry, storeCity, setFormDone, storeQuarter } =
  addressInfoSlice.actions;
export default addressInfoSlice.reducer;
