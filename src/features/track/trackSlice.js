import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  initialState: {
    trackImageUrl: "",
  },
  reducers: {
    getTrackUrl: (state, action) => {
      state.trackImageUrl = "";
      state.trackImageUrl += action.payload;
    },
  },
});

export const selectTrackImgUrl = (state) => state.track.trackImageUrl;
export const { getTrackUrl } = trackSlice.actions;
export default trackSlice.reducer;
