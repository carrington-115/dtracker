import { configureStore } from "@reduxjs/toolkit";
import personalReducer from "../features/profile/personalInfoSlice";
import addressReducer from "../features/profile/addressInfoSlice";
import cameraReducer from "../features/camera/cameraSlice";
import trackReducer from "../features/track/trackSlice";
import trackFormReducer from "../features/trackForm/trackFormSlice";

export const store = configureStore({
  reducer: {
    personal: personalReducer,
    address: addressReducer,
    camera: cameraReducer,
    track: trackReducer,
    trackform: trackFormReducer,
  },
});
