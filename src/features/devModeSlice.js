import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  devMode: false,
};

const devModeSlice = createSlice({
  name: "devMode",
  initialState,
  reducers: {
    setDevMode: (state, { payload }) => {
      state.devMode = payload;
    },
  },
});

export const { setDevMode } = devModeSlice.actions;

export default devModeSlice.reducer;
