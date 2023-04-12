import { createSlice } from "@reduxjs/toolkit";

export const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    value: false,
  },
  reducers: {
    setVisible: (state) => {
      //   if (state.value === false) {
      state.value = true;
      //   }
    },
    setInVisible: (state) => {
      state.value = false;
    },
  },
});

export const selectCameraState = (state) => state.camera.value;
export const { setVisible, setInVisible } = cameraSlice.actions;
export default cameraSlice.reducer;
