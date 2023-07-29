import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: false,
};

/**
 * Redux Toolkit slice for toggling the progress spinner
 */
const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    // payload is a boolean to activate or deactivate the spinner
    setProgress: (state, { payload }) => {
      state.progress = payload;
    },
  },
});

export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;
