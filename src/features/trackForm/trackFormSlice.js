import { createSlice } from "@reduxjs/toolkit";

export const trackFormSlice = createSlice({
  name: "trackform",
  initialState: {
    location: "",
    imageUrl: "",
    comments: "",
  },
  reducers: {
    addImageUrl: (state, action) => {
      state.imageUrl = "";
      state.imageUrl += action.payload;
    },
    addLocation: (state, action) => {
      state.location = "";
      state.location += action.payload;
    },
    addComment: (state, action) => {
      state.comments = "";
      state.comments += action.payload;
    },
  },
});

export const selectLocation = (state) => state.trackform.location;
export const selectImage = (state) => state.trackform.imageUrl;
export const selectComments = (state) => state.trackform.comments;
export const { addComment, addImageUrl, addLocation } = trackFormSlice.actions;

export default trackFormSlice.reducer;
