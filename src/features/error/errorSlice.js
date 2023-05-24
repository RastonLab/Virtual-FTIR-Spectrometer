import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  errorText: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    activateError: (state) => {
      state.error = true;
    },
    deactivateError: (state) => {
      state.error = false;
    },
    updateErrorText: (state, { payload }) => {
      state.errorText = payload;
    },
  },
});

export const { activateError, deactivateError, updateErrorText } =
  errorSlice.actions;

export default errorSlice.reducer;
