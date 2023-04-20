import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    value: false,
    tempUrl: "",
  },
  reducers: {
    setVisible: (state) => {
      state.value = true;
    },
    setInVisible: (state) => {
      state.value = false;
    },
    storeTempUrl: (state, action) => {
      state.tempUrl += action.payload;
    },
    setTempUrlEmpty: (state) => {
      state.tempUrl = "";
    },
  },
});

export const selectCameraState = (state) => state.camera.value;
export const selectUrl = (state) => state.camera.tempUrl;
export const { setVisible, setInVisible, storeTempUrl, setTempUrlEmpty } =
  cameraSlice.actions;
export default cameraSlice.reducer;
