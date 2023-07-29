import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: false,
};

/**
 * Redux Toolkit slice for toggling the spinner
 */
const spinnerSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    // payload is a boolean to activate or deactivate the spinner
    setSpinner: (state, { payload }) => {
      state.spinner = payload;
    },
  },
});

export const { setSpinner } = spinnerSlice.actions;

export default spinnerSlice.reducer;
