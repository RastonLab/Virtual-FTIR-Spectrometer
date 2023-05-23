import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  text: "",
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    updateErrorActive: (state, { payload }) => {
      state.active = payload;
    },
    updateErrorText: (state, { payload }) => {
      state.text = payload;
    },
  },
});

export const { updateErrorActive, updateErrorText } = errorSlice.actions;

export default errorSlice.reducer;
