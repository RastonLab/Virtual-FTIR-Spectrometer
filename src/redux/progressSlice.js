import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetching: false,
  prefetch: false,
  postfetch: false,
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
      state.fetching = payload[0];
      state.prefetch = payload[1];
      state.postfetch = payload[2];
    },
  },
});

export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;
