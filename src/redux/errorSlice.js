import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  errorText: "",
};

/**
 * Redux Toolkit slice for setting error related data
 */
const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    // payload is a list [boolean, string]
    //   boolean: `true` or `false` to set or unset the error
    //   string: text associated with a particular error
    setError: (state, { payload }) => {
      state.error = payload[0];
      state.errorText = payload[1];
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
