import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlalist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { setPlalist } = playlistSlice.actions;
export default playlistSlice.reducer;
