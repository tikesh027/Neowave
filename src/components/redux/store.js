import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import playlistSlice from "./slices/playlistSlice";

const Store = configureStore({
  reducer: {
    auth: authSlice,
    playlist: playlistSlice,
  },
});

export default Store;
