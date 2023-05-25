import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: false,
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    activateProgress: (state) => {
      state.progress = true;
    },
    deactivateProgress: (state) => {
      state.progress = false;
    },
  },
});

export const { activateProgress, deactivateProgress } = progressSlice.actions;

export default progressSlice.reducer;
